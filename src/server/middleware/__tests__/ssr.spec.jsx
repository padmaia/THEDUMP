import React from 'react';
import request from 'supertest';
import express from 'express';

import handleSSR from '../ssr';

jest.mock('../../../universal/THEDUMP', () => () => <div>Root HTML</div>);

describe('SSR middleware', () => {
  it('should send app html', () => {
    const app = express();
    app.get('*', handleSSR);
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .then((res) => {
        expect(res.text).toMatchSnapshot();
      });
  });
});
