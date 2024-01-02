const path = require("path");

const formatProxy = (proxy = []) =>
  Object.fromEntries(proxy.map(([path, { target }]) => [path, target]));

module.exports = (dirname, settings, env) => ({
  static: {
    directory: path.resolve(dirname, ...settings.buildDir),
  },
  compress: true,
  port: env.PORT,
  hot: true,
  historyApiFallback: true,
  ...(settings.proxy ? { proxy: formatProxy(settings.proxy) } : {}),
});
