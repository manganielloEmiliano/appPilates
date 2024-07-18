const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pagoSchema = new Schema({
    mes: { type: String, required: true }, // Por ejemplo: "Julio"
    monto: { type: Number, required: true },
    socio: { type: Schema.Types.ObjectId, ref: 'Socio', required: true },
    clase: { type: Schema.Types.ObjectId, ref: 'Clase', required: true },
    pagado: { type: Boolean, default: false } // false: no pagado, true: pagado
});

const Pago = mongoose.model('Pago', pagoSchema);
module.exports = Pago;
