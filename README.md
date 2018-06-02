# require-enhancer

node CommonJS enhancer, load module from url or TS

### usage

- load module from url

```js
const r = require("nedo");

r(
  "https://raw.githubusercontent.com/loatheb/require-enhancer/master/__test/case/code.js"
).then(module => {
  // this will load url file as module
});
```

load module from ts file

```js
const r = require("nedo");

r("./code.ts").then(module => {
  // this will load url file as module
});
```
