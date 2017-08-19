import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to THE DUMP!');
});

app.listen(3000, () => {
  console.log('THEDUMP is listening on port 3000!'); // eslint-disable-line no-console
});
