const mysql = require('mysql')

/*
 * Configuração de conexão
*/
const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'agenda-petshop'
})

module.exports = conexao