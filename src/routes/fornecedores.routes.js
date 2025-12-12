const express = require('express');
const router = express.Router();
const fornecedoresController = require('../controllers/fornecedores.controller');

// Rotas REST - CRUD da tabela de fornecedores
router.get('/', fornecedoresController.listarFornecedores);
router.get('/:id', fornecedoresController.buscarFornecedorPorId); 
// router.post('/', .); 
// router.delete('/:id', );
// router.put('/:id', ); 

module.exports = router;