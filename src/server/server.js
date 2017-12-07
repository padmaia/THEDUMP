import express from 'express';
import { ensureLoggedIn } from 'connect-ensure-login';

import setUpDev from './middleware/dev';
import setUpAuth from './middleware/auth';
import handleSSR from './middleware/ssr';

export function setUpServer() {
  const app = express();

  if (process.env.NODE_ENV === 'development') setUpDev(app);
  app.use('/static', express.static('dist'));
  setUpAuth(app);
  app.get('*', ensureLoggedIn('/login'), handleSSR);

  return app;
}

export default setUpServer();
