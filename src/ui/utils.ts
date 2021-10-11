import { Input2ndDeg } from "./type";

export const keys: (keyof Input2ndDeg)[] = ["a", "b", "c"];

export const isNotPartial2ndDeg = (s: Partial<Input2ndDeg>): s is Input2ndDeg =>
  typeof s.a === "number" && typeof s.b === "number" && typeof s.c === "number";

export const formatNumber = (x: number) => x.toFixed(2);
