import express from 'express';

export default function setupCDN(app) {
  app.use('/static', express.static('dist'));
}
