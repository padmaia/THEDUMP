import handleSSR from './handleSSR';

export default function setUpSSR(app) {
  app.get('*', handleSSR);
}
