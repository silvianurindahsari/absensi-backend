# Absensi Mahasiswa - Backend

### Cara Install:
1. Clone repository ini.
2. Jalankan `npm install` di terminal.

### Cara Run:
1. Pastikan PostgreSQL aktif dan tabel sudah dibuat.
2. Jalankan `node app.js`.

-- Jalankan ini di Query Tool PostgreSQL Anda:
CREATE TABLE absensi (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(255),
  nim VARCHAR(50),
  tanggal DATE,
  status VARCHAR(20)
);
