/* eslint-env jest */

const path = require("path");
const exportFrom = require("./index");

test("rolling up directory into named exports", () => {
  const actual = exportFrom(path.join(__dirname, "fixture"), {
    verbose: true,
    excludes: ["excludeMe.js"]
  });

  expect(actual).toMatchSnapshot();
});
