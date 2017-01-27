'use strict';
const Sequelize = require('sequelize');
const db = require('./models/db.js');

const Place = db.define('Place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY,
        allowNull: false
    }
}, {
    validate: {

    }
});

module.exports = Place;