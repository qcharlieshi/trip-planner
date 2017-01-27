const Sequelize = require('sequelize');
const db = require('./db.js');

let Activities = db.define('activity', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 50]
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Activities;
