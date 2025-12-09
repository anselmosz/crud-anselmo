const express = require("express");
const app = express();

app.use(express.json());

// Rotas
const produtoRoutes = require('./routes/produtos.routes');
app.use('/produtos', produtoRoutes);

module.exports = app;