const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Ruta para obtener todas las mesas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM mesas');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las mesas' });
  }
});

// Ruta para crear una nueva mesa
router.post('/', async (req, res) => {
  const { nombre, sorteos, horarios } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO mesas (nombre, sorteos, horarios) VALUES (?, ?, ?)',
      [nombre, sorteos, horarios]
    );
    res.json({ message: 'Mesa creada exitosamente', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la mesa' });
  }
});

module.exports = router;
