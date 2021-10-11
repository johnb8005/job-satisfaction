import React from "../_snowpack/pkg/react.js";
import * as C from "./components.js";
import * as U from "./utils.js";
import Input from "../_snowpack/pkg/@nexys/react-bootstrap/dist/form/input/text.js";
import Wrapper from "../_snowpack/pkg/@nexys/react-bootstrap/dist/form/wrapper.js";
import Score from "./score.js";
const Form = ({
  data,
  onChange,
  weights
}) => {
  const [matrix, setMatrix] = React.useState(data.matrix);
  const [errors, setErrors] = React.useState([]);
  const handleChange = (matrix2) => {
    setMatrix(matrix2);
    onChange({matrix: matrix2, name: data.name});
    if (U.isNotPartial(matrix2)) {
      setErrors([]);
      return;
    }
    setErrors(["all fields need to be adjusted"]);
  };
  const handleChangeName = (name) => onChange({name, matrix});
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Label"
  }, /* @__PURE__ */ React.createElement(Input, {
    value: data.name || "",
    onChange: (v) => handleChangeName(v)
  })), /* @__PURE__ */ React.createElement("ul", null, U.keys.map((k, i) => /* @__PURE__ */ React.createElement(C.Wrapper, {
    key: i,
    name: U.labels.get(k) || ""
  }, /* @__PURE__ */ React.createElement(C.Slider, {
    value: matrix[k],
    onChange: (v) => handleChange({...matrix, [k]: v})
  })))), errors.length > 0 && /* @__PURE__ */ React.createElement("ul", null, errors.map((e, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    style: {color: "red"}
  }, e))), /* @__PURE__ */ React.createElement(Score, {
    weights,
    matrix
  }));
};
export default Form;
