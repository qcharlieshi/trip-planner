const Sequelize = require('sequelize');
const db = require('./db.js');

let Restaurants = db.define('restaurants', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 50]
    },
    cuisine: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {min: 0, max: 5}
    }
});

module.exports = Restaurants;
