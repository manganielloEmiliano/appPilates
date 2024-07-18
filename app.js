const express = require('express');
const conectarDB = require('./db/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Conectar a la base de datos MongoDB
conectarDB();

app.use(express.json()); // Middleware para parsear JSON

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});
//Rutas de usuario
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

