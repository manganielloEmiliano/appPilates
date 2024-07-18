const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.crearUsuario);
//pasar los usuarios como json
router.get('/usuarios', usuarioController.obtenerUsuarios);

module.exports = router;
