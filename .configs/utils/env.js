const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: Number.parseInt(process.env.PORT) || 3000,
  PUBLIC_PATH: process.env.PUBLIC_PATH || ".",
};
