// Import mysql connection
var connection = require('../config/connection.js');

//ORM object for all SQL statement functions
var orm = {
    selectAll: function(tableNm, cb) {
        var queryStr = 'SELECT * FROM ??';
        connection.query(queryStr, [tableNm], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableNm, colNm, val, cb) {
        var queryStr = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryStr, [tableNm, colNm, val], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableNm, colNm, val, idNm, idVal, cb) {
        var queryStr = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryStr, [tableNm, colNm, val, idNm, idVal], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
