import React from "react";

import { Matrix } from "./type";
import * as U from "./utils";

const Score = ({
  matrix,
  weights,
}: {
  matrix: Partial<Matrix>;
  weights: Matrix;
}) => {
  if (!U.isNotPartial(matrix)) {
    return <></>;
  }

  return (
    <h1>
      <span className="badge badge-primary">
        {/* {U.formatNumber(U.getScore(matrix))} -{" "} */}
        {U.formatNumber(U.getScoreWeighted(matrix, weights))}
      </span>
    </h1>
  );
};

export default Score;
