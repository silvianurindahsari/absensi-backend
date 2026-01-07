const express = require('express');
const cors = require('cors');
const absensiRoutes = require('./routes/absensi');

const app = express();
app.use(cors());
app.use(express.json());

// Gunakan rute yang sudah dibuat
app.use('/absensi', absensiRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`SERVER AKTIF DI PORT ${PORT}`);
    console.log(`Coba buka: http://localhost:${PORT}/absensi`);
});