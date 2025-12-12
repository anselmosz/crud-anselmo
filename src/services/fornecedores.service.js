const knex = require("knex");
const knexfile = require('../../knexfile');
const conexaoDB = knex(knexfile)

module.exports = fornecedoresService = {
  listarFornecedores: async () => {
    const fornecedores = await conexaoDB("tbfornecedores");
    return fornecedores
  },

  buscarFornecedorPorId: async (id) => {
    const fornecedor = await conexaoDB.select().from("tbfornecedores").where("idFornecedor", id);
    return fornecedor;
  }
};