# @mseeley/exportFrom

`exportFrom` is a convenience utility to roll-up a subdirectory into named
exports.

# Installation

```
npm install -D @mseeley/exportFrom
```

# Usage

Require `mseeley/exportFrom in an`index.js` file in the directory of files that
you want to roll-up.

> Example directory structure:

```bash
directory\
  index.js
  file-a.js
  file-b\
    index.js
```

> Example `index.js`:

```js
module.exports = require("@mseeley/exportFrom")(__dirname);
```

Later you can require the named exports.

> Example usage

```
const { fileA, fileB } = require("./directory");
```

Files with hyphens in their name are automatically converted to camelCase. All
other filenames are untouched.

These specific JavaScript files and directories are ignored by default:

- `*.spec.js`
- `__tests__/*`
- `__fixtures__/*`
- `node_modules`

_Additional_ exclude patterns can be provided. The patterns are evaluated by
[`minimatch`](https://www.npmjs.com/package/minimatch).

```js
module.exports = require("@mseeley/exportFrom")(__dirname, {
  excludes: ["foo/bar.js"]
});
```
