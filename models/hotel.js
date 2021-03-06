const Sequelize = require('sequelize');
const db = require('./db.js');

let Hotels = db.define('hotels', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 50]
    },
    num_stars: {
        type: Sequelize.FLOAT,
        validate: {min: 0, max: 5}
    },
    amenities: {
        type: Sequelize.TEXT
    }
});


module.exports = Hotels;


