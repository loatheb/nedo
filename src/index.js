const vm = require("vm");

const context = require("./context");
const wrap = require("./wrapper");
const getCompiledCodeStr = require("./lib/getCompiledCodeStr");
const utils = require("./utils");

const m = {
  exports: {}
};

async function customRequire(
  filename,
  { runInThisContext = false } = { runInThisContext: false }
) {
  const fileMeta = await getCompiledCodeStr(filename);

  const wrapper = wrap(fileMeta.code);

  const script = new vm.Script(wrapper, {
    filename: fileMeta.filename,
    displayErrors: true
  });

  const compiledWrapper = runInThisContext
    ? script.runInThisContext()
    : script.runInNewContext(context);

  compiledWrapper.call(m.exports, m.exports, customRequire, m);

  return Object.prototype.hasOwnProperty.call(m.exports, "default")
    ? m.exports.default
    : m.exports;
}

module.exports = customRequire;
