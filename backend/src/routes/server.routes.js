const express = require('express');
const router = express.Router();

const gastos = require('../controllers/gastos.controllers');
const usuarios = require('../controllers/usuarios.controllers');
const gastosControllers = require('../controllers/gastos.controllers');

// Rutas para GASTOS
router.get('/misitio/gastos', gastosControllers.getGastos);
router.post('/misitio/gastos', gastosControllers.addGasto);
router.put('/misitio/gastos/:id', gastosControllers.updateGasto); 
router.delete('/misitio/gastos/:id', gastosControllers.deleteGasto); 

// Rutas para USUARIOS
router.get('/misitio/usuarios', usuarios.getUsuario);
router.post('/misitio/usuarios', usuarios.addUsuario);

// Ruta principal
router.get('/misitio', (req, res) => {
    res.send('Bienvenido al backend de calculo gastos');
});

// Ruta acerca de
router.get('/misitio/about', (req, res) => {
    res.send('acerca de mi sitio');
});

// Ruta para contacto con imagen
router.get('/misitio/contacto', (req, res) => {
    res.sendFile('./contacto.jpg', { root: __dirname });
});

// Ruta 404
router.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

module.exports = router;