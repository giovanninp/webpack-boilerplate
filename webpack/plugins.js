const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (appTitle, dir, publicPath) => [
  new HtmlWebpackPlugin({
    publicPath,
    title: appTitle,
    filename: 'index.html',
    template: path.resolve(dir, 'webpack', 'static', 'template.html'),
  }),
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
];
