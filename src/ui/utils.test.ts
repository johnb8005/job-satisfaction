import * as U from "./utils";

const dataIn = `,compensation,manager,team,location,work,freedom
,50,50,50,50,50,50

"fgh",0,83,95,0,0,0`;

const exp = {
  weights: {
    compensation: 50,
    freedom: 50,
    location: 50,
    manager: 50,
    team: 50,
    work: 50,
  },
  data: [
    {
      name: "fgh",
      matrix: {
        compensation: 0,
        freedom: 0,
        location: 0,
        manager: 83,
        team: 95,
        work: 0,
      },
    },
  ],
};

test("import data", () => {
  expect(U.importData(dataIn)).toEqual({
    weights: {
      compensation: 50,
      freedom: 50,
      location: 50,
      manager: 50,
      team: 50,
      work: 50,
    },
    data: [
      {
        name: "fgh",
        matrix: {
          compensation: 0,
          freedom: 0,
          location: 0,
          manager: 83,
          team: 95,
          work: 0,
        },
      },
    ],
  });
});

test("export data", () => {
  expect(U.toCSV(exp.weights, exp.data)).toEqual(dataIn);
});
