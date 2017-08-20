import express from 'express';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies

import config from '../../webpack.config';
import handleSSR from './ssr/handleSSR';

const app = express();

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', handleSSR);

app.listen(3000, () => {
  console.log('THEDUMP is listening on port 3000!'); // eslint-disable-line no-console
});
