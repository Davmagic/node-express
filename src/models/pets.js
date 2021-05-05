const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definiendo la estructura de los datos
const PetSchema = new Schema({
    nombre: String,
    edad: Number
    /* asi es como se envian campos con valores por defecto
    status: {
        type: Boolean,
        default: false
    } */
});

//el model pide la coleccion y el Schema
module.exports = mongoose.model('mascotas',PetSchema);