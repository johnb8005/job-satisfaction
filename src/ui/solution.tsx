import React from "react";

import { Solution } from "./type";
import { formatNumber } from "./utils";

const Solution = ({ solution }: { solution: Solution }) => (
  <>
    <h3>Solution</h3>
    <code>
      x1={formatNumber(solution[0])}, x2={formatNumber(solution[1])}
    </code>
  </>
);

export default Solution;
