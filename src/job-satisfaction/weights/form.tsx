import React from "react";

import { Matrix } from "../type";
import * as C from "../components";
import * as U from "../utils";

const Form = ({ onChange }: { onChange: (matrix: Matrix) => void }) => {
  const [matrix, setMatrix] = React.useState<Matrix>(U.defaultWeights);

  const handleChange = (matrix: Matrix) => {
    setMatrix(matrix);
    onChange(matrix);
  };

  return (
    <ul>
      {U.keys.map((k, i) => (
        <C.Wrapper key={i} name={U.labels.get(k) || ""}>
          <C.Slider
            value={matrix[k]}
            onChange={(v) => handleChange({ ...matrix, [k]: v })}
          />
        </C.Wrapper>
      ))}
    </ul>
  );
};

export default Form;
