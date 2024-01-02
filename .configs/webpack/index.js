const path = require("path");

const { env, settings } = require("../settings");

const getLoaders = require("./loaders");
const getPlugins = require("./plugins");
const getDevServer = require("./devServer");

const getConfig = (dirname, _, mode) => {
  return {
    entry: {
      main: path.resolve(dirname, ...settings.sourceDir, "index.js"),
    },
    output: {
      path: path.resolve(dirname, ...settings.buildDir),
      filename: "[name].bundle.js",
    },
    resolve: {
      extensions: [".*", ".js", ".jsx"],
    },
    module: getLoaders(dirname),
    plugins: getPlugins(dirname, settings, env),
    devServer:
      mode === "development" ? getDevServer(dirname, settings, env) : undefined,
  };
};

module.exports = { getConfig };
