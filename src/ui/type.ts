export interface Input2ndDeg {
  a: number;
  b: number;
  c: number;
}

export type Errors = { [name in keyof Input2ndDeg]?: string[] };

export type Solution = [number, number];
