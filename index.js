import Express from 'express';
import db from './config/database.js';

const app = Express();
//KONEKSI DATABASE
//jika berhasil
try {
  await db.authenticate();
  console.log('Database Connected');
} catch (error) {
  console.error('Database Connection Error :', error);
}

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(5000, () => console.log('server running at port 5000'));
