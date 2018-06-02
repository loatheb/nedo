# NEDO

Node CommonJS require enhancer, could load module from url or ts at runtime ...

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

- load module from ts file

```js
const r = require("nedo");

r("./code.ts").then(module => {
  // this will load url file as module
});
```
