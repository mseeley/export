const path = require("path");
const minimatch = require("minimatch");
const glob = require("glob");

module.exports = (dirname, options = {}) => {
  const { excludes = [] } = options;
  const pattern = "{!(__fixtures__|__tests__|node_modules)/,}!(*.spec).js";
  const toExportName = file =>
    file
      .replace(/^-+|-+$/g, "")
      .replace(/-+(.)/g, (match, p1) => p1.toUpperCase())
      .replace(/\.js$/, "")
      .replace(/\/index/, "");

  return glob
    .sync(pattern, { cwd: dirname })
    .filter(
      file =>
        file !== "index.js" &&
        excludes.every(exclude => !minimatch(file, exclude))
    )
    .reduce(
      (acc, file) =>
        Object.assign(acc, {
          [toExportName(file)]: require(`${path.join(dirname, file)}`)
        }),
      {}
    );
};
