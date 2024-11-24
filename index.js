const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Importar las rutas
const apuestasRoutes = require('./routes/apuestas');
const mesasRoutes = require('./routes/mesas');
const usuariosRoutes = require('./routes/usuarios');

// Usar las rutas
app.use('/apuestas', apuestasRoutes);
app.use('/mesas', mesasRoutes);
app.use('/usuarios', usuariosRoutes);

// Ruta de prueba principal
app.get('/', (req, res) => {
    res.send('¡Servidor de Lotería funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
