const webpack = require('webpack');
const path = require('path');
const docsPath = path.resolve(__dirname, 'docs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// eslint-disable-next-line
const TARGET = process.env.TARGET || null;

const config = {
  entry: path.resolve(docsPath, 'index.js'),
  output: {
    path: docsPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap',
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [],
  devServer: {
    contentBase: docsPath,
    disableHostCheck: true
  },
};

if (TARGET === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  );
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );
}

module.exports = config;
