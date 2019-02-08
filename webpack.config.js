const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const target = 'docs';

module.exports = {
  entry: {
    andy: './src/andy.js',
    z: './src/z.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, target)
  },
  module: {
    rules: [
      {
        test: /\.(m4a|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([target]),
    new HtmlWebpackPlugin({
      title: 'What does this make?',
      filename: 'index.html',
      chunks: 'andy'
    }),
    new HtmlWebpackPlugin({
      title: 'What does this make? As told by Zola',
      filename: 'z.html',
      chunks: 'z'
    })
  ],
};