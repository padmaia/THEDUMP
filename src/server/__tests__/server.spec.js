import request from 'supertest';

import { setUpServer } from '../server';

jest.mock('../middleware/dev', () => jest.fn(app =>
  app.get('/static/js/thedump.js', (req, res) => res.send('dev js bundle')),
));
jest.mock('../middleware/ssr', () => jest.fn((req, res) =>
  res.send('server side rendered html'),
));

describe('server', () => {
  afterEach(() => {
    process.env.NODE_ENV = undefined;
  });

  it('should serve the development bundles in development', () => {
    process.env.NODE_ENV = 'development';
    const server = setUpServer();
    return request(server)
      .get('/static/js/thedump.js')
      .expect(200, 'dev js bundle');
  });

  it('should serve the production bundles when not in development', () => {
    const server = setUpServer();
    return request(server)
      .get('/static/js/thedump.js')
      .expect('Content-Type', 'application/javascript')
      .expect(200);
  });

  it('should server side render app html', () => {
    const server = setUpServer();
    return request(server)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, 'server side rendered html');
  });
});
