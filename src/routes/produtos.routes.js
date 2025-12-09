const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos.controller');

// Rotas REST
router.get('/', produtosController.listarProdutos);
router.get('/:id', produtosController.buscarProdutoPorId); 
router.post('/', produtosController.inserirProduto); 
router.delete('/:id', produtosController.deletarProduto);
// router.put('/id=:id',); 

module.exports = router;