const vm = require("vm");

const context = require("./context");
const wrap = require("./wrapper");

const getCompiledCodeStr = require("./lib/getCompiledCodeStr");

const m = {
  exports: {}
};

function r(
  filename,
  { runInThisContext = false } = { runInThisContext: false }
) {
  return getCompiledCodeStr(filename, rHelper);

  function rHelper(fileMeta) {
    const wrapper = wrap(fileMeta.code);

    const script = new vm.Script(wrapper, {
      filename: fileMeta.filename,
      displayErrors: true
    });

    const compiledWrapper = runInThisContext
      ? script.runInThisContext()
      : script.runInNewContext(context);

    compiledWrapper.call(m.exports, m.exports, r, m);

    return Object.prototype.hasOwnProperty.call(m.exports, "default")
      ? m.exports.default
      : m.exports;
  }
}

module.exports = r;
