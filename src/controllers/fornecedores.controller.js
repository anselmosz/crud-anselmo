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
};