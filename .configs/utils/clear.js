const { exec } = require("child_process");
const path = require("path");

const { buildDir } = require("../constants.json");

const task = exec(`rm -rf ${path.join(...buildDir)}`);

task.kill()