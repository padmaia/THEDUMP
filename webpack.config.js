const path = require('path');
const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
  const { ifDevelopment, ifProduction } = getIfUtils(env);

  return {
    entry: removeEmpty([
      ifDevelopment('react-hot-loader/patch'),
      ifDevelopment('webpack-hot-middleware/client'),
      './src/client',
    ]),
    output: {
      filename: 'thedump.js',
      path: path.resolve(__dirname, 'dist/js'),
      publicPath: '/static/js/',
    },
    devtool: ifDevelopment('eval-source-map'),
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
    plugins: removeEmpty([
      ifDevelopment(new webpack.HotModuleReplacementPlugin()),
      ifDevelopment(new webpack.NoEmitOnErrorsPlugin()),
      ifProduction(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })),
    ]),
    watchOptions: {
      ignored: [/node_modules/, '**/*.spec.*'],
    },
  };
};
