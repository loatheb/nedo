# NEDO

Node CommonJS require enhancer, could load module from url or ts at runtime ...

[![Build Status](https://travis-ci.org/loatheb/nedo.svg?branch=master)](https://travis-ci.org/loatheb/nedo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### usage

- load module from url

```js
const r = require("nedo");

const res = r(
  "https://raw.githubusercontent.com/loatheb/nedo/master/__test/case/code.js"
);
console.log(res); // hello code.js
```

- load module from ts file

```js
const r = require("nedo");

const res = r("./code.ts");
console.log(res); // hello code.ts
```

- top level await

```js
// index.js
const r = require("nedo");

r("./code.js");


// code.js: you don't need wrap await into async a function...
await doSomeAsyncThings();
```

### testcase

you can touch the testcase [\_\_test/index.js](https://github.com/loatheb/nedo/blob/master/__test/index.js) for much more detail.

![https://github.com/loatheb/nedo/blob/master/screenshot/testcase.jpg](https://github.com/loatheb/nedo/blob/master/screenshot/testcase.jpg)
