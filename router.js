import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import JobSatisfaction from "./ui/index.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: JobSatisfaction
  }), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  }));
};
