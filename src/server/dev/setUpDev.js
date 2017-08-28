/* eslint-disable import/no-extraneous-dependencies, global-require */
import createConfig from '../../../webpack.config';

export default function setUpDev(app) {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    const config = createConfig(env);
    const compiler = require('webpack')(config);
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }
}
