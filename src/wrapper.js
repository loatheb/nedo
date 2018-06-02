const generalWrapper = [
  "(function (exports, require, module, __dirname, __filename) { \n",
  "\n});"
];

const asyncWrapper = ["(async function() { \n", "\n})();"];

module.exports = function wrap(script) {
  return `
    ${generalWrapper[0]}
    ${asyncWrapper[0]}
    ${script}
    ${asyncWrapper[1]}
    ${generalWrapper[1]}`;
};
