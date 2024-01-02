const { getConfig } = require("./.configs/webpack");

module.exports = (env, { mode }) => {
  console.log({ env, mode });
  return getConfig(__dirname, env, mode);
};
