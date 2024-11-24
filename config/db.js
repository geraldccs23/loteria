const mysql = require('mysql2/promise'); // Importar mysql2 con soporte de promesas

// Crear el pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool; // Exportar el pool para usarlo en otras partes del código
