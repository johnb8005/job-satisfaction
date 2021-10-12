export const keys = [
  "compensation",
  "manager",
  "team",
  "location",
  "work",
  "freedom"
];
export const labels = new Map([
  ["compensation", "Compensation"],
  ["manager", "Manager"],
  ["team", "Team"],
  ["location", "Location"],
  ["work", "Work"],
  ["freedom", "Freedom"]
]);
export const isNotPartial = (m) => keys.map((k) => typeof m[k] === "number").reduce((a, b) => a && b);
const maxPoints = keys.length * 100;
const getScoreRaw = (m) => keys.map((k) => m[k]).reduce((a, b) => a + b);
const getScoreWeightedRaw = (m, weights) => {
  const sumWeights = getScoreRaw(weights);
  return keys.map((k) => m[k] * weights[k] / sumWeights).reduce((a, b) => a + b);
};
export const getScore = (m) => getScoreRaw(m) / maxPoints;
export const getScoreWeighted = (m, weights) => getScoreWeightedRaw(m, weights) / 100;
export const formatNumber = (n) => (n * 100).toFixed(0) + "%";
export const defaultWeights = {
  compensation: 50,
  work: 50,
  team: 50,
  manager: 50,
  location: 50,
  freedom: 50
};
export const toCSV = (weights, data) => {
  const headers = ["", ...keys];
  const weightRow = ["", ...keys.map((k) => weights[k].toString())];
  const rows = data.map((d) => {
    return [
      d.name ? '"' + d.name.replace('"', '\\"') + '"' : "",
      ...keys.map((k) => d.matrix[k]?.toString() || "")
    ];
  });
  return [headers, weightRow, [""], ...rows].map((row) => row.join(",")).join("\n");
};
export const generateCSV = (weights, data) => {
  const d = toCSV(weights, data);
  const b = new Blob([d], {type: "application/csv"});
  const url = window.URL.createObjectURL(b);
  window.location.replace(url);
};
const rowStringToMatrix = (s, idx = 1) => {
  const w = s.split(",");
  return {
    compensation: Number(w[0 + idx]),
    manager: Number(w[1 + idx]),
    team: Number(w[2 + idx]),
    location: Number(w[3 + idx]),
    work: Number(w[4 + idx]),
    freedom: Number(w[5 + idx])
  };
};
export const importData = (dataIn) => {
  const lines = dataIn.split("\n");
  const weights = rowStringToMatrix(lines[1]);
  const data = lines.slice(3).map((x) => {
    const name = x.split(",")[0].replace(/^\s*"/, "").replace(/"$/, "").replace(/\\/, "");
    const matrix = rowStringToMatrix(x);
    return {name, matrix};
  });
  return {weights, data};
};
