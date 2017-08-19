import React from 'react';
import { renderToString } from 'react-dom/server';

import Html from './Html';

export default function handleSSR(req, res) {
  res.send(renderToString(<Html />));
}
