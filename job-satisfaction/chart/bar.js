import React from "../../_snowpack/pkg/react.js";
import {Bar} from "../../_snowpack/pkg/react-chartjs-2.js";
import {
  backgroundColor,
  borderColor,
  optionsVertical,
  optionsHorizontal
} from "./options.js";
const VerticalBar = ({
  label = "Weights",
  data,
  labels,
  isHorizontal = false
}) => {
  const options = isHorizontal ? optionsHorizontal : optionsVertical;
  const datasets = [
    {
      label,
      data,
      backgroundColor,
      borderColor,
      borderWidth: 1
    }
  ];
  const bardata = {
    labels,
    datasets
  };
  return /* @__PURE__ */ React.createElement(Bar, {
    data: bardata,
    options
  });
};
export default VerticalBar;
