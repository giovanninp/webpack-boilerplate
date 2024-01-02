const path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const parseEnv = (env = {}) =>
  Object.fromEntries(
    Object.entries(env).map(([k, v]) => [k, JSON.stringify(v)])
  );

module.exports = (dirname, settings, env) => [
  new HtmlWebpackPlugin({
    template: path.resolve(dirname, ...settings.staticDir, "index.html"),
    title: settings.title,
    favicon: path.resolve(dirname, ...settings.staticDir, "favicon.ico"),
    meta: {
      viewport: "width=device-width, initial-scale=1",
    },
  }),
  new webpack.DefinePlugin({ "process.env": parseEnv(env) }),
];
