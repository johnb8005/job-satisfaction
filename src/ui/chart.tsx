import React from "react";

import * as T from "./type";
import * as U from "./utils";

import BarChart from "./chart/bar";

const Chart = ({ weights, data }: { weights: T.Matrix; data: T.Data[] }) => {
  const labels: string[] = data.map((d) => d.name || "");
  const ds = data.map((d) => U.getScoreWeighted(d.matrix as T.Matrix, weights));

  return <BarChart labels={labels} data={ds} />;
};

export default Chart;
