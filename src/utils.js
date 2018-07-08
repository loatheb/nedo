exports.isUrl = function isUrl(string) {
  return /^http[s]?:\/\//.test(string);
};

exports.hasAsync = function hasAsync() {
  try {
    async function dummy() {
      await dummy();
    }
  } catch (e) {
    return false;
  }
  return true;
};
