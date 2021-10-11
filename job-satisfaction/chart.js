import React from "../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import BarChart from "./chart/bar.js";
const Chart = ({weights, data}) => {
  const labels = data.map((d) => d.name || "");
  const ds = data.map((d) => U.getScoreWeighted(d.matrix, weights));
  return /* @__PURE__ */ React.createElement(BarChart, {
    labels,
    data: ds
  });
};
export default Chart;
