const Sequelize = require('sequelize');
const db = require('./db.js');

let Activities = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: [2, 50]
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Activities;
