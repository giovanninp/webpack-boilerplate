module.exports = () => ({
  rules: [
    { test: /.txt?/, use: "raw-loader", exclude: "/node_modules/" },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
    {
      test: /\.css/i,
      use: [
        "style-loader",
        { loader: "css-loader", options: { modules: true } },
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
  ],
});
