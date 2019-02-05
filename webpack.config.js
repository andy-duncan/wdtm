const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const target = 'docs';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, target)
  },
  plugins: [
    new CleanWebpackPlugin([target]),
    new HtmlWebpackPlugin({ title: 'What does this make?' })]
};