const connection = require('../db/db');

function getCards(callback) {
  connection.query('SELECT * FROM card', (error, results) => {
    if (error) {
      console.error('Erro executando SQL query:', error);
      return callback(error, null);
    }
    return callback(null, results);
  });
}

function saveCard(card, callback) {
    const sql = 'INSERT INTO card (description) VALUES (?)';
    connection.query(sql, [card], (error, result) => {
        if (error) {
          console.error('Error executando SQL query:', error);
          return callback(error, null);
        }
        return callback(null, result.insertId);
      });
  }

module.exports = {
    getCards,
    saveCard,
};
