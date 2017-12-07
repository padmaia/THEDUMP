import request from 'supertest';

import { setUpServer } from '../server';

jest.mock('../middleware/dev', () => jest.fn(app =>
  app.get('/static/js/thedump.js', (req, res) => res.send('dev js bundle')),
));
jest.mock('../middleware/auth', () => jest.fn());
jest.mock('connect-ensure-login', () => ({
  ensureLoggedIn: jest.fn(() => (req, res, next) => next()),
}));
jest.mock('../middleware/ssr', () => jest.fn((req, res) =>
  res.send('server side rendered html'),
));

describe('server', () => {
  afterEach(() => {
    process.env.NODE_ENV = undefined;
  });

  it('should serve the development bundles in development', async () => {
    process.env.NODE_ENV = 'development';
    const server = setUpServer();
    await request(server)
      .get('/static/js/thedump.js')
      .expect(200, 'dev js bundle');
  });

  it('should set up authentication', async () => {
    const setUpAuth = require('../middleware/auth'); // eslint-disable-line global-require
    const server = setUpServer();
    await request(server).get('/');
    expect(setUpAuth).toHaveBeenCalled();
  });

  it('should server side render app html', async () => {
    const server = setUpServer();
    await request(server)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, 'server side rendered html');
  });
});
