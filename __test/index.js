const r = require("../src");

(async function() {
  const code1 = await r("./case/code.js");
  console.log(code1);

  const code2 = await r("./case/code2.js");
  console.log(code2);

  const code3 = await r("./case/code.ts");
  console.log(code3);
})();
