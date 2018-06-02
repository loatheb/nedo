# NEDO

Node CommonJS require enhancer, could load module from url or ts at runtime ...

### usage

- load module from url

```js
const r = require("nedo");

const res = r(
  "https://raw.githubusercontent.com/loatheb/require-enhancer/master/__test/case/code.js"
);
console.log(res); // hello code.js
```

- load module from ts file

```js
const r = require("nedo");

const res = r("./code.ts");
console.log(res); // hello code.ts
```

### testcase

for much more detaile information can see the test case [\_\_test/index.js](https://github.com/loatheb/nedo/blob/master/__test/index.js)

[https://github.com/loatheb/nedo/blob/master/screenshot/testcase.js](https://github.com/loatheb/nedo/blob/master/screenshot/testcase.js)
