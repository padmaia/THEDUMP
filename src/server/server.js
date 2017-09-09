import express from 'express';

import setUpDev from './middleware/dev';
import handleSSR from './middleware/ssr';

export function setUpServer() {
  const app = express();

  if (process.env.NODE_ENV === 'development') setUpDev(app);
  app.use('/static', express.static('dist'));
  app.get('*', handleSSR);

  return app;
}

export default setUpServer();
