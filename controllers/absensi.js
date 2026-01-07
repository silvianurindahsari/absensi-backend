const db = require('../config/db');

// Tampilkan semua data (Read)
exports.getAbsensi = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM absensi ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tambah data baru (Create)
exports.addAbsensi = async (req, res) => {
  const { nama, nim, tanggal, status } = req.body;
  try {
    await db.query('INSERT INTO absensi (nama, nim, tanggal, status) VALUES ($1, $2, $3, $4)', 
    [nama, nim, tanggal, status]);
    res.json({ message: 'Data absensi berhasil ditambah!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Fungsi untuk menghapus data
exports.deleteAbsensi = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM absensi WHERE id = $1', [id]);
        res.status(200).json({ message: 'Data berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateAbsensi = async (req, res) => {
    const { id } = req.params;
    const { nama, nim, tanggal, status } = req.body;
    try {
        await db.query(
            'UPDATE absensi SET nama = $1, nim = $2, tanggal = $3, status = $4 WHERE id = $5',
            [nama, nim, tanggal, status, id]
        );
        res.status(200).json({ message: 'Data berhasil diperbarui' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};