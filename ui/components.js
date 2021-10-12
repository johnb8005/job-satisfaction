import React from "../_snowpack/pkg/react.js";
export const Slider = ({
  value,
  onChange
}) => {
  return /* @__PURE__ */ React.createElement("input", {
    min: 0,
    max: 100,
    type: "range",
    value: value === void 0 ? 50 : value,
    onChange: (v) => {
      const w = Number(v.target.value);
      if (!isNaN(w)) {
        onChange(w);
      }
    }
  });
};
export const Wrapper = ({
  name,
  children
}) => /* @__PURE__ */ React.createElement("li", null, name, children);
