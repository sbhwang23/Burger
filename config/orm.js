const db = require('../config/connection.js');

const orm = {
    selectAll: function(tableName, cb) {
        const query = 'SELECT * FROM ??';
        db.query(query, [tableName], (err, result) => {
            if (err) { 
                throw err;
            }
            cb(result);
    });
    },

    insertOne: function(tableName, cols, vals, cb) {
        const query = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}')`;
        db.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(tableName, colVals, condition, cb) {
        const query = `UPDATE ${tableName} SET ${colVals} WHERE (${condition})`;
        db.query(query, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;