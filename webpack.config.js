const path = require('path');
const docsPath = path.resolve(__dirname, 'docs');

module.exports = {
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
  devServer: {
    contentBase: docsPath,
  },
};
