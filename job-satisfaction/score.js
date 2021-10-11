import React from "../_snowpack/pkg/react.js";
import * as U from "./utils.js";
const Score = ({
  matrix,
  weights
}) => {
  if (!U.isNotPartial(matrix)) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement("p", null, U.formatNumber(U.getScoreWeighted(matrix, weights)));
};
export default Score;
