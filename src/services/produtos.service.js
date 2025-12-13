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
    const linhasAfetadas = await conexaoDB("tbprodutos").where("idProduto", id).del();
    return linhasAfetadas;
  },

  atualizarProduto: async (id, dados) => {
    const produtoAtualizado = await conexaoDB("tbprodutos").where("idProduto", id).update(dados);

    return produtoAtualizado;
  },
};