import { Data, Matrix } from "./type";

export const keys: (keyof Matrix)[] = [
  "compensation",
  "manager",
  "team",
  "location",
  "work",
  "freedom",
];

export const labels: Map<keyof Matrix, string> = new Map([
  ["compensation", "Compensation"],
  ["manager", "Manager"],
  ["team", "Team"],
  ["location", "Location"],
  ["work", "Work"],
  ["freedom", "Freedom"],
]);

export const isNotPartial = (m: Partial<Matrix>): m is Matrix =>
  keys.map((k) => typeof m[k] === "number").reduce((a, b) => a && b);

const maxPoints: number = keys.length * 100;

const getScoreRaw = (m: Matrix): number =>
  keys.map((k) => m[k]).reduce((a, b) => a + b);

const getScoreWeightedRaw = (m: Matrix, weights: Matrix): number => {
  const sumWeights = getScoreRaw(weights);

  return keys
    .map((k) => (m[k] * weights[k]) / sumWeights)
    .reduce((a, b) => a + b);
};

export const getScore = (m: Matrix): number => getScoreRaw(m) / maxPoints;

export const getScoreWeighted = (m: Matrix, weights: Matrix): number =>
  getScoreWeightedRaw(m, weights) / 100;

export const formatNumber = (n: number) => (n * 100).toFixed(0) + "%";

export const defaultWeights: Matrix = {
  compensation: 50,
  work: 50,
  team: 50,
  manager: 50,
  location: 50,
  freedom: 50,
};

export const toCSV = (weights: Matrix, data: Data[]): string => {
  const headers: string[] = ["", ...keys];
  const weightRow: string[] = ["", ...keys.map((k) => weights[k].toString())];
  const rows: string[][] = data.map((d) => {
    return [
      d.name ? '"' + d.name.replace('"', '\\"') + '"' : "",
      ...keys.map((k) => d.matrix[k]?.toString() || ""),
    ];
  });

  return [headers, weightRow, [""], ...rows]
    .map((row) => row.join(","))
    .join("\n");
};

export const generateCSV = (weights: Matrix, data: Data[]): void => {
  const d = toCSV(weights, data);

  const b = new Blob([d], { type: "application/csv" });

  const url = window.URL.createObjectURL(b);

  window.location.replace(url);
};

const rowStringToMatrix = (s: string, idx: number = 1): Matrix => {
  const w = s.split(",");
  return {
    compensation: Number(w[0 + idx]),
    manager: Number(w[1 + idx]),
    team: Number(w[2 + idx]),
    location: Number(w[3 + idx]),
    work: Number(w[4 + idx]),
    freedom: Number(w[5 + idx]),
  };
};

export const importData = (
  dataIn: string
): { weights: Matrix; data: Data[] } => {
  const lines: string[] = dataIn.split("\n");

  const weights: Matrix = rowStringToMatrix(lines[1]);
  const data: Data[] = lines.slice(3).map((x) => {
    const name = x
      .split(",")[0]
      .replace(/^\s*"/, "")
      .replace(/"$/, "")
      .replace(/\\/, "");
    const matrix = rowStringToMatrix(x);

    return { name, matrix };
  });

  return { weights, data };
};

const arrayBufferToString = async (p: ArrayBuffer): Promise<string> => {
  const blob = new Blob([p], { type: "text/plain" });
  return await blob.text();
};

export const readUploadedFileAndTransform = async (
  files: FileList | null
): Promise<{
  weights: Matrix;
  data: Data[];
}> => {
  if (!files) {
    return Promise.reject("files could not be read");
  }

  const file = files[0];

  const p = await file.arrayBuffer();
  const t = await arrayBufferToString(p);
  return importData(t);
};
