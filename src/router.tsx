import React from "react";
import { Route, Switch } from "react-router-dom";

import JobSatisfaction from "./ui";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={JobSatisfaction} />
      <Route component={NotFound} />
    </Switch>
  );
};
