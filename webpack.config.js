const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [CssWebpackPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'HW1',
      template: path.resolve(__dirname, './public/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),

    new CssWebpackPlugin({
      filename: 'style.css',
    })
  ],
}