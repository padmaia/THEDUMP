const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'thedump.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/js/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
