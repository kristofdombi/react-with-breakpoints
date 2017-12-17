const path = require('path');
const webpack = require('webpack');
const banner = require('./webpack.banner');
//  eslint-disable-next-line
const TARGET = process.env.TARGET || null;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
  },
  'prop-types': {
    root: 'PropTypes',
    commonjs2: 'prop-types',
    commonjs: 'prop-types',
    amd: 'prop-types',
  },
};

const config = {
  entry: './src/react-with-breakpoints.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-with-breakpoints.js',
    sourceMapFilename: 'react-with-breakpoints.sourcemap.js',
    library: 'withBreakpoints',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{ test: /\.(js|jsx)/, loader: 'babel-loader' }],
  },
  plugins: [new webpack.BannerPlugin(banner)],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: externals,
};

if (TARGET === 'minify') {
  config.output.filename = 'react-with-breakpoints.min.js';
  config.output.sourceMapFilename = 'react-with-breakpoints.min.js';
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
        mangle: {
          reserved: ['React', 'ReactDOM', 'withBreakpoints'],
        },
      }
    })
  );
}

module.exports = config;
