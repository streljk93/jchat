const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
