const express = require("express");
const app = express();

app.use(express.json());

// Rotas
const produtoRoutes = require('./routes/produtos.routes');
app.use('/produtos', produtoRoutes);

const fornecedoresRoutes = require('./routes/fornecedores.routes');
app.use('/fornecedores', fornecedoresRoutes);

module.exports = app;