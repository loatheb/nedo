const { hasAsync } = require("./utils");

const generalWrapper = [
  "(function (exports, require, module, __dirname, __filename) { \n",
  "\n});"
];

const asyncWrapper = hasAsync
  ? ["(async function() { \n", "\n})();"]
  : ["\n", "\n"];

module.exports = function wrap(script) {
  return `
    ${generalWrapper[0]}
    ${asyncWrapper[0]}
    ${script}
    ${asyncWrapper[1]}
    ${generalWrapper[1]}
  `;
};
