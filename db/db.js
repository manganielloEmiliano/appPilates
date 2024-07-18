const mongoose = require('mongoose');

// URI de conexión a MongoDB con autenticación
const uri = 'mongodb://mongo-user:123456@localhost:27017/admin'; // Cambia esto si es necesario

const conectarDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Añade estas opciones para ver más detalles en los logs
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('Conexión a MongoDB establecida con éxito');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1); // Termina el proceso con error
    }
};

module.exports = conectarDB;

