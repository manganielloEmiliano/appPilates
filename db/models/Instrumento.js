const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentoSchema = new Schema({
    nombre: { type: String, required: true },
    disponibilidad: { type: Boolean, default: true } // true: disponible, false: no disponible
});

const Instrumento = mongoose.model('Instrumento', instrumentoSchema);
module.exports = Instrumento;
