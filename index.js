import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(5000, () => console.log('server running at port 5000'));
