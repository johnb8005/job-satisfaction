import React from "react";

import Solution from "./solution";
import Form from "./form";

import * as T from "./type";

const Intro = () => (
  <p>
    Solving <code>ax^2 + bx + c = 0</code> in R.{" "}
    <small>
      See <a href={"https://en.wikipedia.org/wiki/Quadratic_equation"}>Wiki</a>{" "}
      for more information
    </small>
  </p>
);

export default () => {
  const [solution, setSolution] = React.useState<T.Solution | undefined>();

  return (
    <>
      {solution && <Solution solution={solution} />}

      <Intro />

      <Form onSuccess={setSolution} />
    </>
  );
};
