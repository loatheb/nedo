const axios = require("axios");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const utils = require("../utils");

function getCodeStr({ path }) {
  if (utils.isUrl(path)) {
    return axios.get(path).then(res => {
      return res.data;
    });
  }

  const processCwd = [...process.argv];
  const pathToFile = processCwd.pop().split("/");
  const bootstrapFilename = pathToFile.pop();

  return readFileSync(resolve(pathToFile.join("/"), path), "utf-8");
}

function compileCodeStr(fileMeta) {
  const ext = fileMeta.ext;
  const extWhiteList = ["js", "es6"];
  if (!ext || extWhiteList.includes(ext)) {
    return fileMeta;
  }
  const compiler = require(`./compile/${ext}`);
  const code = compiler(fileMeta);

  return {
    ...fileMeta,
    code
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

module.exports = async function getCompiledCodeStr(file) {
  const fileMeta = resolveFileMeta(file);
  const code = await getCodeStr(fileMeta);
  return compileCodeStr({ ...fileMeta, code });
};
