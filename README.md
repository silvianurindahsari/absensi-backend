# Absensi Mahasiswa - Backend

### Cara Install:
1. Clone repository ini.
2. Jalankan `npm install` di terminal.

### Cara Run:
1. Pastikan PostgreSQL aktif dan sudah membuat database.
2. Jalankan server dengan perintah: `node app.js`.

### Struktur Database:
Jalankan perintah SQL berikut di Query Tool PostgreSQL Anda untuk membuat tabel:

```sql
CREATE TABLE absensi (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(255),
  nim VARCHAR(50),
  tanggal DATE,
  status VARCHAR(20)
);
