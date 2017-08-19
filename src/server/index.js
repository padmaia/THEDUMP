import express from 'express';

import handleSSR from './ssr/handleSSR';

const app = express();

app.get('*', handleSSR);

app.listen(3000, () => {
  console.log('THEDUMP is listening on port 3000!'); // eslint-disable-line no-console
});
