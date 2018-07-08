# NEDO

Node 端 CommonJS 规范增强版，支持运行时从 url 和 ts 文件加载模块...

[![Build Status](https://travis-ci.org/loatheb/nedo.svg?branch=master)](https://travis-ci.org/loatheb/nedo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[[English doc](https://github.com/loatheb/nedo/blob/master/README.md)]
[[中文文档](https://github.com/loatheb/nedo/blob/master/README-CN.md)]

### 示例

- 从 url 加载一个 CommonJS 模块

```js
const r = require("nedo");

const code = r(
  "https://raw.githubusercontent.com/loatheb/nedo/master/__test/case/code.js"
);
console.log(code); // hello code.js
```

- 从 ts 文件加载一个 CommonJS 模块

```js
const r = require("nedo");

const code = r("./code.ts");
console.log(code); // hello code.ts
```

- 顶层 await

```js
// index.js
const r = require("nedo");

r("./code.js");


// code.js: 这里并不需要将 await 包裹在 async 函数中
await doSomeAsyncThings();
```

### 测试用例

可以 review [\_\_test/index.js](https://github.com/loatheb/nedo/blob/master/__test/index.js) 来获取更多关于使用的信息.

![https://github.com/loatheb/nedo/blob/master/screenshot/testcase.jpg](https://github.com/loatheb/nedo/blob/master/screenshot/testcase.jpg)

### 协议

MIT
