import React from "../../_snowpack/pkg/react.js";
import * as C from "../components.js";
import * as U from "../utils.js";
const Form = ({onChange}) => {
  const [matrix, setMatrix] = React.useState(U.defaultWeights);
  const handleChange = (matrix2) => {
    setMatrix(matrix2);
    onChange(matrix2);
  };
  return /* @__PURE__ */ React.createElement("ul", null, U.keys.map((k, i) => /* @__PURE__ */ React.createElement(C.Wrapper, {
    key: i,
    name: U.labels.get(k) || ""
  }, /* @__PURE__ */ React.createElement(C.Slider, {
    value: matrix[k],
    onChange: (v) => handleChange({...matrix, [k]: v})
  }))));
};
export default Form;
