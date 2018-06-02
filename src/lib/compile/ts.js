const { transform } = require("@babel/core");

module.exports = function compileTs({ code, basename }) {
  const ast = transform(code, {
    presets: ["@babel/preset-typescript"],
    filename: `${basename}.ts`
  });
  return ast.code;
};
