const connection = require('../config/connection.js');

const orm = {
    selectAll: function(tableName, cb) {
        const query = 'SELECT * FROM ??';
        connection.query(query, [tableName], (err, result) => {
            if (err) { 
                throw err;
            }
            cb(result);
    });
    },

    insertOne: function(tableName, col, val, cb) {
        const query = 'INSERT INTO ?? VALUES ?', {
            burger_name: burger_name,
            devoured: false,
        }
        connection.query(query, [tableName, col, val], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(tableName, colVal, cb) {
        const query = 'UPDATE ?? SET ? WHERE ?';
        connection.query(query, [tableName, colVal, condition], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;