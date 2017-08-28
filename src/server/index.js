import express from 'express';

import setUpDev from './dev/setUpDev';
import setUpCDN from './cdn/setupCDN';
import setUpSSR from './ssr/setUpSSR';

const app = express();

setUpDev(app);
setUpCDN(app);
setUpSSR(app);

app.listen(3000, () => {
  console.log('THEDUMP is listening on port 3000!'); // eslint-disable-line no-console
});
