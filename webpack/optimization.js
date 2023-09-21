const BY_MODE = {
  production: {
    concatenateModules: true,
    mergeDuplicateChunks: true,
    minimize: true,
  },
  default: undefined,
};

module.exports = (mode) => BY_MODE[mode] ?? BY_MODE.default;
