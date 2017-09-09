/* eslint-disable react/no-danger */
import React from 'react';
import { renderToString } from 'react-dom/server';

import THEDUMP from '../../universal/THEDUMP';

export function Html() {
  const html = renderToString(<THEDUMP />);

  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        <script src="/static/js/thedump.js" />
      </body>
    </html>
  );
}

export default function handleSSR(req, res) {
  res.send(renderToString(<Html />));
}
