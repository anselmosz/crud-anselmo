const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos.controller');

// Rotas REST - CRUD da tabela de produtos
router.get('/', produtosController.listarProdutos);
router.get('/:id', produtosController.buscarProdutoPorId); 
router.post('/', produtosController.inserirProduto); 
router.delete('/:id', produtosController.deletarProduto);
router.put('/:id', produtosController.atualizarProduto); 

module.exports = router;