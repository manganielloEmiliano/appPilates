const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    fechaNacimiento: { type: Date, required: true },
    telefono: { type: String, required: true },
    email: { type: String },
    activo: { type: Boolean, default: true }
});

const Socio = mongoose.model('Socio', socioSchema);
module.exports = Socio;
