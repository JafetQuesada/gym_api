'use strict';

const express = require('express');
const router = express.Router();
const Ejercicio = require('../models/ejercicios.model')

router.post('/registrar-ejercicio', (req, res) => {
    let ejercicio = new Ejercicio({
        nombre: req.body.nombre,
        zona: req.body.zona,
        estado: 'Activo'
    });
    ejercicio.save((err, ejercicio_bd) => {
        if (err) {
            res.json({
                msj: 'El ejercicio no se pudo registrar',
                err
            });
        } else {
            res.json({
                mjs: 'El ejercicio  se registro correctamente',
                ejercicio_bd
            });
        }
    });
});

module.exports = router;