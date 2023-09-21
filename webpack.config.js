const configureWebpack = require("./webpack/index");

module.exports = () => {
  return configureWebpack({ dir: __dirname });
};
