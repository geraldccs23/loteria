const express = require('express');
const router = express.Router();

// Ruta de prueba para mesas
router.get('/', (req, res) => {
    res.send('Ruta de mesas funcionando');
});

module.exports = router;
