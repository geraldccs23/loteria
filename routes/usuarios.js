const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, apellido, telefono, correo, id_rol } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, apellido, telefono, correo, id_rol) VALUES (?, ?, ?, ?, ?)',
      [nombre, apellido, telefono, correo, id_rol]
    );
    res.json({ message: 'Usuario creado exitosamente', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

module.exports = router;
