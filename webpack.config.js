const path = require('path')
module.exports = {
  entry: './project.js',
  output: {
    path: path.join(__dirname, ''),
    filename: 'dist/bundle.js'
  },
  module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  node: {
    fs: 'empty'
 }

  
}