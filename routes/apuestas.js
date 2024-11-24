const express = require('express');
const router = express.Router();

// Ruta de prueba para apuestas
router.get('/', (req, res) => {
    res.send('Ruta de apuestas funcionando');
});

module.exports = router;
