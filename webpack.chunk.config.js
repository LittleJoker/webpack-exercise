var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'entry': './c.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  optimization: {
      splitChunks: {
          chunks: 'all',
          name: true
      }
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