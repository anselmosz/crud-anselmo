DROP DATABASE crudanselmo;

CREATE DATABASE crudanselmo;
USE crudanselmo;

CREATE TABLE tbfornecedores(
  idFornecedor INT(10) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255),
  email VARCHAR(255),
  telefone CHAR(14), -- o telefone está no padrão "+5511911112222"
  endereco VARCHAR(255),
  cidade VARCHAR(255),
  cnpj CHAR(18),
  PRIMARY KEY(idFornecedor)
);

CREATE TABLE tbprodutos(
  idProduto INT(10) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255),
  preco DECIMAL(10,2),
  idFornecedor INT(10) NOT NULL,
  PRIMARY KEY(idProduto),
  FOREIGN KEY(idFornecedor) REFERENCES tbfornecedores(idFornecedor)
);

CREATE TABLE tbfuncionarios(
  idFuncionario INT(10) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255),
  email VARCHAR(12),
  PRIMARY KEY(idFuncionario)
);

CREATE TABLE tbusuarios(
  idUsuario INT(10) NOT NULL AUTO_INCREMENT,
  nomeUsr VARCHAR(255),
  senha VARCHAR(12),
  idFuncionario INT(10) NOT NULL,
  PRIMARY KEY(idUsuario),
  FOREIGN KEY(idFuncionario) REFERENCES tbfuncionarios(idFuncionario)
);

CREATE TABLE tbclientes(
  idCliente INT(10) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255),
  PRIMARY KEY(idCliente)
);

CREATE TABLE tbvendas(
  idVenda INT(10) NOT NULL AUTO_INCREMENT,
  idCliente INT(10) NOT NULL,
  dataVenda DATE not null,
  idProduto INT(10) NOT NULL,
  idUsuario INT(10) NOT NULL,
  total DECIMAL(10,2),
  PRIMARY KEY(idVenda),
  FOREIGN KEY(idCliente) REFERENCES tbclientes(idCliente),
  FOREIGN KEY(idProduto) REFERENCES tbprodutos(idProduto),
  FOREIGN KEY(idUsuario) REFERENCES tbusuarios(idUsuario)
);

insert into tbfornecedores(nome, email, telefone, endereco, cidade, cnpj) values("O Fornecedor", "atendimento@ofornecedor.com", "+5511912345678", "Rua da Concordia, 3132", "São Paulo - SP", "10.100.200/0001-00");
insert into tbprodutos(nome, preco, idFornecedor) values("arroz", 29, 1);
