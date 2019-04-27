const mysql = require('promise-mysql');
const db = require('./db');

// guardando os dados na variável conexao
const conexao = mysql.createPool(db.database);

// criando conexão
conexao.getConnection()
    .then(connection => {
        conexao.releaseConnection(connection);
    });

// exportação da conexão
module.exports = conexao;