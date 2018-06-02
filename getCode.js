const axios = require('axios')
const { readFileSync } = require('fs')
const { resolve } = require('path')

module.exports = function(file) {
  if (/^http[s]?:\/\//.test(file)) {
    return axios.get(file)
      .then(res => {
        return res.data;
      })
  }
  return readFileSync(resolve(process.cwd(), file), 'utf-8')
}
