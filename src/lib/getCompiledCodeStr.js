const { readFileSync } = require("fs");
const { resolve } = require("path");
const request = require("sync-request");

const utils = require("../utils");

function getCodeStr(fileMeta, cb) {
  const path = fileMeta.path;

  if (utils.isUrl(path)) {
    const res = request("GET", path);
    const code = res.getBody().toString();
    return cb({ ...fileMeta, code });
  } else {
    const processCwd = [...process.argv];
    const pathToFile = processCwd.pop().split("/");
    const bootstrapFilename = pathToFile.pop();

    const code = readFileSync(resolve(pathToFile.join("/"), path), "utf-8");

    return cb({ ...fileMeta, code });
  }
}

function compileCodeStr(cb) {
  return function(fileMeta) {
    const ext = fileMeta.ext;
    const extWhiteList = ["js", "es6"];
    if (!ext || extWhiteList.includes(ext)) {
      return cb(fileMeta);
    }
    const compiler = require(`./compile/${ext}`);
    const code = compiler(fileMeta);

    return cb({
      ...fileMeta,
      code
    });
  };
}

function resolveFileMeta(file) {
  const match = file.match(/.*\/(.+?)\.(.+)/);
  if (!match) {
    throw new Error("[nedo.resolveFileMeta]: invalid file name");
  }
  return {
    path: file,
    filename: `${match[1]}.${match[2]}`,
    basename: match[1],
    ext: match[2],
    code: null
  };
}

module.exports = function getCompiledCodeStr(file, cb) {
  const fileMeta = resolveFileMeta(file);
  return getCodeStr(fileMeta, compileCodeStr(cb));
};
