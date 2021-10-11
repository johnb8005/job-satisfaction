import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import JobSatisfaction from "./job-satisfaction";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/job-satisfaction"} component={JobSatisfaction} />
      <Route component={NotFound} />
    </Switch>
  );
};
