const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, './public'),
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'app/components'),
      '@containers': path.resolve(__dirname, 'app/containers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
};
