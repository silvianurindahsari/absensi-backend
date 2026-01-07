const express = require('express');
const router = express.Router();
const absensiController = require('../controllers/absensi');

router.get('/', absensiController.getAbsensi); 
router.post('/', absensiController.addAbsensi); 
router.delete('/:id', absensiController.deleteAbsensi);
router.put('/:id', absensiController.updateAbsensi);

module.exports = router;