import * as S from "./solve";

test("solve 1st deg equation", () => {
  expect(S.solve1stDegEquation(1, -2)).toEqual(2);
  expect(S.solve1stDegEquation(2, -2)).toEqual(1);
});

test("solve 2nd deg equation", () => {
  // (x+1)(x-1) = x^2 -1
  expect(S.solve2ndDegEquation(1, 0, -1)).toEqual([1, -1]);
  // (x-1)^2= x^2 -2x + 1
  expect(S.solve2ndDegEquation(1, -2, 1)).toEqual([1, 1]);
});
