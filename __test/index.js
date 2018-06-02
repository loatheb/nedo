const r = require("../src");

const codeFromLocal = r("./case/code.js");
console.log("codeFromLocal", codeFromLocal);

const codeFromRemote = r("./case/code2.js");
console.log("codeFromRemote", codeFromRemote);

const tsCode = r("./case/code.ts");
console.log("tsCode", tsCode);

r("./case/code3.js");
