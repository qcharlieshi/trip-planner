const Sequelize = require('sequelize');
const db = require('./models/db.js');

let Restaurants = db.define('restaurants', {
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
    cuisine: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {min: 0, max: 5}
    }
})

module.exports = Restaurants;
