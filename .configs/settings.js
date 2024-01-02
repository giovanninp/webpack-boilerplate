const env = require("./utils/env");

const settings = {
  title: "<project-name>",
  buildDir: ["dist"],
  sourceDir: ["src"],
  staticDir: [".configs", "static"],
  proxy: [],
};

module.exports = { settings, env };
