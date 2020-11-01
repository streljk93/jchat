const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
  },
});
