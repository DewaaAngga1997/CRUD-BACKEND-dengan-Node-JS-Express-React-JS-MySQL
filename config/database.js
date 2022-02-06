import { Sequelize } from 'sequelize';
//2 buat koneksi ke database
const db = new Sequelize('produk_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
