import React from "react";

import * as T from "./type";
import Form from "./form";
import Weights from "./weights/form";
import * as U from "./utils";
import Chart from "./chart";

export default () => {
  const [data, setData] = React.useState<T.Data[]>([]);

  const [weights, setWeights] = React.useState<T.Matrix>(U.defaultWeights);
  const [showWeight, setShowWeight] = React.useState<boolean>(false);

  return (
    <div className="container">
      {showWeight && (
        <>
          <Weights onChange={(v) => setWeights(v)} />{" "}
          <button
            className={"btn btn-secondary"}
            type="button"
            onClick={() => setShowWeight(false)}
          >
            Hide weights
          </button>
        </>
      )}
      {!showWeight && (
        <button
          className={"btn btn-secondary"}
          type="button"
          onClick={() => setShowWeight(true)}
        >
          Adjust weights
        </button>
      )}
      <div className="row">
        {/*}   <code>{JSON.stringify(data)}</code>*/}
        {data.map((d, i) => (
          <div key={i} className={"col-md-3"}>
            <div style={{ padding: "3px" }}>
              <Form
                weights={weights}
                onChange={(d) => {
                  data[i] = d;
                  setData([...data]);
                }}
                data={d}
              />
              <button
                type="button"
                className={"btn btn-sm btn-danger"}
                onClick={() => setData([...data.filter((_x, j) => i !== j)])}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className={"btn btn-sm btn-primary"}
        type="button"
        onClick={() => setData([...data, { matrix: {} }])}
      >
        Add
      </button>

      {data.length > 0 && <Chart weights={weights} data={data} />}

      {data.length > 0 && (
        <>
          &nbsp;
          <button
            className={"btn btn-secondary btn-sm"}
            type="button"
            onClick={() => U.generateCSV(weights, data)}
          >
            to CSV
          </button>
        </>
      )}

      {data.length === 0 && (
        <input
          type="file"
          onChange={async (c) => {
            if (!c.target.files) {
              return;
            }

            const file = c.target.files[0];

            const p = await file.arrayBuffer();
            const blob = new Blob([p], { type: "text/plain" });
            const t = await blob.text();
            const j = U.importData(t);

            setData(j.data);
          }}
        />
      )}
    </div>
  );
};
