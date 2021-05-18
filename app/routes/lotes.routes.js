
const express = require("express");
const router = express.Router();
const lotes = require('../controllers/lotes.controllers.js');
//Aqui definimos las rutas del api
router.post('/', lotes.createLote);
router.get('/', lotes.getAllLotes);
router.put('/:id', lotes.updateLote);
router.delete('/:id', lotes.deleteLote);
router.get('/:id', lotes.getLote);

module.exports = router