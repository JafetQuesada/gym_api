'use strict';
const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    cedula: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    edad: { type: Number, required: true, unique: false },
    estatura: { type: Number, required: true, unique: false },
    peso: { type: Number, required: true, unique: false }
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuario');