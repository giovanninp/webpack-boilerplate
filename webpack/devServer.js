require("webpack-dev-server");

// const proxy = {
//   api: {
//     target: "http://127.0.0.1:3000",
//   },
// };

module.exports = (outputPath) => ({
  static: {
    directory: outputPath,
  },
  port: 8000,
  // proxy, // use if needed
});
