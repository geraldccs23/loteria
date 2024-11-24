const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Ruta para obtener todas las apuestas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM apuestas');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las apuestas' });
  }
});

// Ruta para crear una nueva apuesta
router.post('/', async (req, res) => {
  const { id_usuario, id_animalito, horario_seleccionado, monto, numero_ticket, total_apuesta, porcentaje_ganancia } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO apuestas (id_usuario, id_animalito, horario_seleccionado, monto, numero_ticket, total_apuesta, porcentaje_ganancia) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id_usuario, id_animalito, horario_seleccionado, monto, numero_ticket, total_apuesta, porcentaje_ganancia]
    );
    res.json({ message: 'Apuesta creada exitosamente', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la apuesta' });
  }
});

module.exports = router;
