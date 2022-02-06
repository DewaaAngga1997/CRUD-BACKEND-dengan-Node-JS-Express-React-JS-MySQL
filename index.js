import express from 'express';
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from 'cors';

const app = express();
//1 tambahkan tipy modul
//2 KONEKSI DATABASE
//jika berhasil maka
try {
  await db.authenticate();
  console.log('Database Connected');
  //jika tidak berasil maka
} catch (error) {
  console.error('Database Connection Error :', error);
}
//3 route pindah halaman
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(5000, () => console.log('server running at port 5000'));
