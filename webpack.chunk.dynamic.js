var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './dynamic.js',
  output: {
    path: path.resolve(__dirname, 'dynamic/'),
    filename: 'cBundle.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}