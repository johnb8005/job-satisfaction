import React from "../_snowpack/pkg/react.js";
import Form from "./form.js";
import Weights from "./weights/form.js";
import * as U from "./utils.js";
import Chart from "./chart.js";
export default () => {
  const [data, setData] = React.useState([]);
  const [weights, setWeights] = React.useState(U.defaultWeights);
  const [showWeight, setShowWeight] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, showWeight && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Weights, {
    onChange: (v) => setWeights(v)
  }), " ", /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: () => setShowWeight(false)
  }, "Hide weights")), !showWeight && /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary",
    type: "button",
    onClick: () => setShowWeight(true)
  }, "Adjust weights"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, data.map((d, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {padding: "3px"}
  }, /* @__PURE__ */ React.createElement(Form, {
    weights,
    onChange: (d2) => {
      data[i] = d2;
      setData([...data]);
    },
    data: d
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-danger",
    onClick: () => setData([...data.filter((_x, j) => i !== j)])
  }, "Remove"))))), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-sm btn-primary",
    type: "button",
    onClick: () => setData([...data, {matrix: {}}])
  }, "Add"), data.length > 0 && /* @__PURE__ */ React.createElement(Chart, {
    weights,
    data
  }), data.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, " ", /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    type: "button",
    onClick: () => U.generateCSV(weights, data)
  }, "to CSV")), data.length === 0 && /* @__PURE__ */ React.createElement("input", {
    type: "file",
    onChange: async (c) => {
      if (!c.target.files) {
        return;
      }
      const file = c.target.files[0];
      const p = await file.arrayBuffer();
      const blob = new Blob([p], {type: "text/plain"});
      const t = await blob.text();
      const j = U.importData(t);
      setData(j.data);
    }
  }));
};
