import React from "react";

import Input from "@nexys/react-bootstrap/dist/form/input/number";
import Wrapper from "@nexys/react-bootstrap/dist/form/wrapper";
import * as S from "../lib/solve";

import * as T from "./type";
import * as U from "./utils";

const Form = ({ onSuccess }: { onSuccess: (s: T.Solution) => void }) => {
  const [state, setState] = React.useState<Partial<T.Input2ndDeg>>({});

  const [errors, setErrors] = React.useState<T.Errors>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const errors: T.Errors = {};

    if (U.isNotPartial2ndDeg(state)) {
      try {
        const s = S.solve2ndDegEquation(state.a, state.b, state.c);

        onSuccess(s);
      } catch (err) {
        alert(err);
      }
      setErrors(errors);
      return;
    }

    U.keys.forEach((k) => {
      if (state[k] === undefined) {
        errors[k] = ["this field must be defined"];
      }
    });

    setErrors(errors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper
        label={"Coefficient a"}
        errors={errors["a"]}
        info={
          'if this field is set to 0, an equation of the 1st degree of the type "bx +c=0" will be solved instead'
        }
      >
        <Input
          placeholder={"a"}
          value={state.a}
          onChange={(a) => setState({ ...state, a })}
          errors={errors["a"]}
        />
      </Wrapper>
      <Wrapper label={"Coefficient b"} errors={errors["b"]}>
        <Input
          placeholder={"b"}
          value={state.b}
          onChange={(b) => setState({ ...state, b })}
          errors={errors["b"]}
        />
      </Wrapper>
      <Wrapper label={"Coefficient c"} errors={errors["c"]}>
        <Input
          placeholder={"c"}
          value={state.c}
          onChange={(c) => setState({ ...state, c })}
          errors={errors["c"]}
        />
      </Wrapper>
      <button className={"btn btn-primary"} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
