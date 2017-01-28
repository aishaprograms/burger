var orm = require('../config/orm.js');

var burger = {
    // lists all the burgers
    all: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    // creates a burger
    create: function(burgerNm, cb) {
        orm.insertOne('burgers', 'burger_name', burgerNm, function(result) {
            cb(result);
        });
    },
    // updates the burger status to devoured = true
    devour: function(idVal, cb) {
        orm.updateOne('burgers', 'devoured', true, 'id', idVal, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;
