import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import THEDUMP from '../universal/THEDUMP';

// Remove useless/ugly hash Facebook auth adds to url
if (window.location.hash && window.location.hash === '#_=_') {
  window.location.hash = '';
}

const rootEl = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );
};

render(THEDUMP);
if (module.hot) {
  module.hot.accept('../universal/THEDUMP', () => {
    const NEXTDUMP = require('../universal/THEDUMP').default; // eslint-disable-line global-require
    render(NEXTDUMP);
  });
}
