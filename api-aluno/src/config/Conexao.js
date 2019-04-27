const mysql = require('promise-mysql');
const db = require('./db');

const conexao = mysql.createPool(db.database);

conexao.getConnection()
    .then(connection => {
        conexao.releaseConnection(connection);
    });

module.exports = conexao;