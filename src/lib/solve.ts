/**
 *
 *  ax+b =0
 * x = -b/a
 */
export const solve1stDegEquation = (a: number, b: number): number => -b / a;

/**
 * ax^2 + bx + c = 0
 * @param a
 * @param b
 * @param c
 * @returns [x1, x2]
 */
export const solve2ndDegEquation = (
  a: number,
  b: number,
  c: number
): [number, number] => {
  if (a == 0) {
    const x = solve1stDegEquation(b, c);

    return [x, NaN];
  }

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    throw Error("solution is not in R");
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return [x1, x2];
};
