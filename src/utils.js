exports.isUrl = function isUrl(string) {
  return /^http[s]?:\/\//.test(string);
};
