const knex = require("knex");
const knexfile = require('../../knexfile');
const conexaoDB = knex(knexfile)

module.exports = produtosService = {
  listarProdutos: async () => {
    const produtos = await conexaoDB("tbprodutos");
    return produtos;
  },

  buscarProdutoPorId: async (id) => {
    const produto = await conexaoDB.select().from("tbprodutos").where("idProduto", id);
    return produto;
  },

  inserirProduto: async (inserir) => {
    await conexaoDB("tbprodutos").insert(inserir);
  },

  deletarProduto: async (id) => {
    await conexaoDB("tbprodutos").where("idProduto", id).del();
  },

  atualizarProduto: async (id, oQueAlterar) => {
    const produto = await conexaoDB("tbprodutos").where("idProduto", id).update(oQueAlterar);

    return produto;
  }
};