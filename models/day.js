const Sequelize = require('sequelize');
const db = require('./db.js');

let Days = db.define('day', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.now()
    }
});

module.exports = Days;


