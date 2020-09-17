const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    
    insertOne: function(cb) {
        orm.insertOne('burgers', 'burger_name', val, function(res) {
            cb(res);
        });
    },

    updateOne: function(cb) {
        orm.updateOne('burgers', colVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;