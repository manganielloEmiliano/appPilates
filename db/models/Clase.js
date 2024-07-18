const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claseSchema = new Schema({
    horario: { type: String, required: true }, // Por ejemplo: "10:00 AM"
    dia: { type: String, required: true }, // Por ejemplo: "Lunes"
    profe: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    espacios: [{ socio: { type: Schema.Types.ObjectId, ref: 'Socio' }, instrumento: { type: Schema.Types.ObjectId, ref: 'Instrumento' } }]
});

const Clase = mongoose.model('Clase', claseSchema);
module.exports = Clase;
