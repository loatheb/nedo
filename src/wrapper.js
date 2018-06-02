const generalWrapper = [
  "(function (exports, require, module, __dirname, __filename) { \n",
  "\n});"
];

const asyncWrapper = ["(async function() { \n", "\n})();"];

module.exports = function wrap(script) {
  return `
    ${generalWrapper[0]}
    ${script}
    ${generalWrapper[1]}`;
};
