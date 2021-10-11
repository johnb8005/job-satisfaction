import React from "react";

import { Matrix, Data } from "./type";
import * as C from "./components";
import * as U from "./utils";

import Input from "@nexys/react-bootstrap/dist/form/input/text";
import Wrapper from "@nexys/react-bootstrap/dist/form/wrapper";

import Score from "./score";

const Form = ({
  data,
  onChange,
  weights,
}: {
  data: Data;
  onChange: (v: Data) => void;
  weights: Matrix;
}) => {
  const [matrix, setMatrix] = React.useState<Partial<Matrix>>(data.matrix);
  const [errors, setErrors] = React.useState<string[]>([]);

  const handleChange = (matrix: Partial<Matrix>) => {
    setMatrix(matrix);
    onChange({ matrix, name: data.name });

    if (U.isNotPartial(matrix)) {
      setErrors([]);
      return;
    }

    setErrors(["all fields need to be adjusted"]);
  };

  const handleChangeName = (name?: string) => onChange({ name, matrix });

  return (
    <>
      {/*  <code>{JSON.stringify(matrix)}</code>*/}

      <Wrapper label={"Label"}>
        <Input value={data.name || ""} onChange={(v) => handleChangeName(v)} />
      </Wrapper>

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

      {errors.length > 0 && (
        <ul>
          {errors.map((e, i) => (
            <li key={i} style={{ color: "red" }}>
              {e}
            </li>
          ))}
        </ul>
      )}

      <Score weights={weights} matrix={matrix} />
    </>
  );
};

export default Form;
