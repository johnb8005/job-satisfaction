import * as U from "./utils";

test("format number", () => {
  expect(U.formatNumber(0.3396831102)).toEqual("0.34");
});
