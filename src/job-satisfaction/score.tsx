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
    <p>
      {/* {U.formatNumber(U.getScore(matrix))} -{" "} */}
      {U.formatNumber(U.getScoreWeighted(matrix, weights))}
    </p>
  );
};

export default Score;
