const vm = require('vm')

const context = require('./context')
const wrap = require('./wrapper')
const getCode = require('./getCode')

const m = {
  exports: {},
}

module.exports = async function require(filename, runInThisContext = false) {
  const code = await getCode(filename)

  const r = function(file) {
    if (/^http[s]?:\/\//.test(file)) {
      return require(file)
    }
    return global.require(file)
  }

  const wrapper = wrap(code)
  const script = new vm.Script(wrapper, {
    filename,
    displayErrors: true,
  })

  const compiledWrapper = runInThisContext
    ? script.runInThisContext()
    : script.runInNewContext(context)

  compiledWrapper.call(m.exports, m.exports, r, m)

  const res = Object.prototype.hasOwnProperty.call(m.exports, 'default')
    ? m.exports.default
    : m.exports
  return res
}
