var webpack = require('webpack')

module.exports = {
  entry: './a.js',
  output: {
    path: __dirname,
    filename: 'varBundle.js',
    libraryTarget: 'var',
    library: 'ALib'
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
}