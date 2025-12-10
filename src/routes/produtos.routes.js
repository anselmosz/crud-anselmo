const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtos.controller');

// Rotas REST - CRUD da tabela de produtos
router.get('/', produtosController.listarProdutos);
router.get('/:id', produtosController.buscarProdutoPorId); 
router.post('/', produtosController.inserirProduto); 
router.put('/:id', produtosController.atualizarProduto);
router.delete('/:id', produtosController.deletarProduto);

module.exports = router;