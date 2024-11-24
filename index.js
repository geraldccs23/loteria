const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');  // Añadido para permitir solicitudes desde otros orígenes
const app = express();

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());  // Permite las solicitudes desde otros dominios

// Importar las rutas
const mesasRoutes = require('./routes/mesas');
const apuestasRoutes = require('./routes/apuestas');
const usuariosRoutes = require('./routes/usuarios');

// Usar las rutas
app.use('/mesas', mesasRoutes);
app.use('/apuestas', apuestasRoutes);
app.use('/usuarios', usuariosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
