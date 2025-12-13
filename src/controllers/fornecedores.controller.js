const fornecedoresService = require("../services/fornecedores.service");

module.exports = {
  listarFornecedores: async (req, res) => {
    const fornecedores = await fornecedoresService.listarFornecedores();
    if (!fornecedores || fornecedores.length === 0) return res.status(404).json({message: "Dados não encontrados"});

    res.status(200).json(fornecedores);
  },

  buscarFornecedorPorId: async (req, res) => {
    const fornecedor = await fornecedoresService.buscarFornecedorPorId(req.params.id);
    if (!fornecedor || fornecedor.length === 0) return res.status(404).json({message: "Dados não encontrados"});

    res.status(200).json(fornecedor)
  },

  inserirFornecedor: async (req, res) => {
    const { nome, email, telefone, endereco, cidade, cnpj } = req.body;

    if (!nome && !email && !telefone && !endereco && !cidade && !cnpj) return res.status(400).json({message: "dados obrigatórios faltando"})

    const novoFornecedor = {
      nome,
      email,
      telefone,
      endereco,
      cidade,
      cnpj
    }

    await fornecedoresService.inserirFornecedor(novoFornecedor);

    res.status(200).json({
      "message": "Fornecedor cadastrado com sucesso!",
      "Dados do Fornecedor": novoFornecedor
    })
  },

  atualizarFornecedor: async(req, res) => {
    const { nome, email, telefone, endereco, cidade, cnpj } = req.body;
     
    const dados = {
      nome,
      email,
      telefone,
      endereco,
      cidade,
      cnpj
    }
    
    const fornecedorAtualizado = await fornecedoresService.atualizarFornecedor(req.params.id, dados);
    
    if (!fornecedorAtualizado) return res.status(404).json({message: "Dados não encontrados"});

    res.status(200).json({
      "message": "Dados do fornecedor alterados",
      "Dados do fornecedor": dados
    })
  },

  deletarFornecedor: async (req, res) => {
    const resultado = await fornecedoresService.deletarFornecedor(req.params.id);
    
    if(resultado === null) return res.status(404).json({message: "Dados não encontrados"});

    if (resultado.totalProdutos === 1) return res.status(409).json({message: `Fornecedor possui ${resultado.totalProdutos} produto vinculado e não pode ser excluído`});

    if (resultado.totalProdutos > 1) return res.status(409).json({message: `Fornecedor possui ${resultado.totalProdutos} produtos vinculados e não pode ser excluído`});

    res.status(200).json({message: "Fornecedor excluído!"});
  }
};