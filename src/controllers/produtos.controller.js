const produtosService = require("../service/produtosService");

module.exports = {
  listarProdutos: async (req, res) => {
    const produtos = await produtosService.listarProdutos();
    if (!produtos) return res.status(404).json({ message: "Dados não encontrados" });

    res.status(200).json(produtos);
  },

  buscarProdutoPorId: async (req, res) => {
    const produto = await produtosService.buscarProdutoPorId(req.params.id);
    if (!produto) return res.status(404).json({ message: "Dados não encontrados" });

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

    const produto = await produtosService.inserirProduto(novoProduto);

    res.status(200).json({
      message: "Produto cadastrado!",
      produto: produto
    })
  },

  deletarProduto: async (req, res) => {
    const produto = await produtosService.deletarProduto(req.params.id);
    if (!produto) return res.status(404).json({ message: "Dados não encontrados" });
    
    res.status(200).json({ message: "Produto excluído!" });
  },

  alterarProduto: async (req, res) => {
    const { nome, preco, idFornecedor } = req.body  

    const produtoAtualizado = {
      // id: Date.now(),
      nome,
      preco,
      idFornecedor
    }

    const produto = await produtosService.atualizarProduto(req.params.id, produtoAtualizado)

    res.status(200).json({
      message: "dados do produto alterados",
      produto: produto
    })
  }
};