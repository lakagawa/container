const mysql = require('mysql');
require('dotenv').config();

const connection = require('mysql').createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    insecureAuth: true,
  });

connection.connect((err) => {
  console.log(process.env.DB_PASSWORD)
  if (err) {
    console.error('Erro ao conectar MySQL:', err);
    return;
  }
  console.log('Conectado ao Mysql :D.');
});

module.exports = connection;