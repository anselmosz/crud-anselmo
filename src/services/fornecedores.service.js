const knex = require("knex");
const knexfile = require('../../knexfile');
const conexaoDB = knex(knexfile)

module.exports = fornecedoresService = {
  // SELECT * FROM tbfornecedores;
  listarFornecedores: async () => {
    const fornecedores = await conexaoDB("tbfornecedores");
    return fornecedores
  },

  // SELECT * FROM tbfornecedores WHERE idFornecedor = id;
  buscarFornecedorPorId: async (id) => {
    const fornecedor = await conexaoDB.select().from("tbfornecedores").where("idFornecedor", id);
    return fornecedor;
  },

  // INSERT INTO tbfornecedores(dados) VALUES(dados);
  inserirFornecedor: async (dados) => {
    await conexaoDB("tbfornecedores").insert(dados); 
  },

  // DELETE FROM tbfornecedores WHERE idFornecedor = id;
  deletarFornecedor: async (id) => {
    const produtosVinculados = await conexaoDB("tbprodutos").where("idFornecedor", id).count("idFornecedor AS total").first();

    const totalProdutos = (produtosVinculados.total)

    if (totalProdutos > 0) return { totalProdutos };

    const linhasAfetadas = await conexaoDB("tbfornecedores").where("idFornecedor", id).del();

    if (linhasAfetadas === 0) return null;
    
    return { sucesso: true };
  },

  // UPDATE tbfFornecedores SET dados = dados WHERE idFornecedor = id;
  atualizarFornecedor: async (id, dados) => {
    await conexaoDB("tbfornecedores").where("idFornecedor", id).update(dados);
  },
};