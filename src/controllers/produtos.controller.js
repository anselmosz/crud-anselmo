const produtosService = require("../services/produtos.service");

module.exports = {
  listarProdutos: async (req, res) => {
    const produtos = await produtosService.listarProdutos();
    if (!produtos || produtos.length === 0) return res.status(404).json({ message: "Dados não encontrados" });

    res.status(200).json(produtos);
  },

  buscarProdutoPorId: async (req, res) => {
    const produto = await produtosService.buscarProdutoPorId(req.params.id);
    if (!produto || produto.length === 0) return res.status(404).json({ message: "Dados não encontrados" });

    res.status(200).json(produto);
  },

  inserirProduto: async (req, res) => {
    const { nome, preco, idFornecedor } = req.body  
    
    if (!nome && !preco && !idFornecedor)
      return res.status(400).json({ message: "Dados obrigatórios faltando" });
    
    const novoProduto = {
      // id: Date.now(),
      nome,
      preco,
      idFornecedor
    }

    await produtosService.inserirProduto(novoProduto);

    res.status(200).json({
      message: "Produto cadastrado!",
      produto: novoProduto
    })
  },

  deletarProduto: async (req, res) => {
    const produto = await produtosService.deletarProduto(req.params.id);
    if (!produto || produto.length === 0) return res.status(404).json({ message: "Dados não encontrados" });
    
    res.status(200).json({ message: "Produto excluído!" });
  },

  atualizarProduto: async (req, res) => {
    const { nome, preco, idFornecedor } = req.body  

    const dados = {
      // id: Date.now(),
      nome,
      preco,
      idFornecedor
    }

    await produtosService.atualizarProduto(req.params.id, dados)

    res.status(200).json({
      message: "Dados do produto alterados",
      produto: dados
    })
  }
};