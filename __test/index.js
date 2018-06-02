const assert = require("assert");
const r = require("../src");

const codeFromLocal = r("./case/code.js");
assert.equal(codeFromLocal, "hello code.js");

const codeFromRemote = r("./case/code2.js");
assert.deepEqual(codeFromRemote, {
  snippet: "hello code.js",
  str: "hello code2.js"
});

const tsCode = r("./case/code.ts");
assert.equal(tsCode, "hello code.ts");

// no error when load a module with top level await
// TODO: change to a test framework which can test the async method...
r("./case/code3.js");

console.log("all test passed!!");
