const Sequelize = require('sequelize');
const db = require('./db.js');

let Days = db.define('day', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Days;


