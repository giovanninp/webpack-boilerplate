const path = require("path");
const express = require("express");

const setupProxy = require("./proxy");

const { settings, env } = require("../settings");

const app = express();

app.use(express.static(path.resolve(...settings.buildDir)));

setupProxy(app)(settings.proxy);

app.get("*", async (_, res) => {
  res.sendFile(path.resolve(...settings.buildDir, "index.html"));
});

app.listen(env.PORT);
