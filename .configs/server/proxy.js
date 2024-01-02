const expressProxy = require("express-http-proxy");

module.exports =
  (app) =>
  (proxy = []) =>
    proxy.forEach(([path, options]) => app.use(path, expressProxy(options)));
