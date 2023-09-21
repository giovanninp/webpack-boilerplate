const path = require('path');

const rules = require('./rules');
const optimization = require('./optimization');
const devServer = require('./devServer');
const plugins = require('./plugins');

const { ENTRY_DIR, OUTPUT_DIR, ENTRY_FILE, OUTPUT_FILE } = require('./constants');

const configureWebpack = ({ dir }) => {
  const { MODE, APP_TITLE, PUBLIC_PATH = '/' } = process.env;

  const outputPath = path.resolve(dir, OUTPUT_DIR);

  return {
    mode: MODE,
    entry: path.resolve(dir, ENTRY_DIR, ENTRY_FILE),
    output: {
      path: outputPath,
      filename: OUTPUT_FILE,
    },
    module: {
      rules,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(dir, `${ENTRY_DIR}/`),
      },
    },
    optimization: optimization(MODE),
    devServer: devServer(outputPath),
    plugins: plugins(APP_TITLE, dir, PUBLIC_PATH),
  };
};

module.exports = configureWebpack;
