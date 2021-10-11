import React from "react";
import { title } from "./config";

import UI from "./ui";

export default () => {
  return (
    <>
      <h1>{title}</h1>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <UI />
        </div>
      </div>
    </>
  );
};
