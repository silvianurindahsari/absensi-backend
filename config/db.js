const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // PASTIKAN NAMA INI SAMA DENGAN DI DBEAVER
  password: '',         // Kosongkan jika sudah set 'trust'
  port: 5432,
});

// Kode untuk mengecek error koneksi secara detail
pool.connect((err, client, release) => {
  if (err) {
    console.error('--- DETAIL ERROR DATABASE ---');
    console.error('Pesan:', err.message);
    console.error('Kode Error:', err.code);
    return;
  }
  console.log('>>> DATABASE BERHASIL TERHUBUNG!');
  release();
});

module.exports = pool;