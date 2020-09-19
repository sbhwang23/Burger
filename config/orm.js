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

    insertOne: function(tableName, cols, vals, cb) {
        const query = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}')`;
        connection.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(tableName, colVal, condition, cb) {
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