const Sequelize = require('sequelize');
const db = require('./models/db.js');

let Hotels = db.define('hotels', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT,

    },
    amenities: {
        type: Sequelize.TEXT
    }
})



