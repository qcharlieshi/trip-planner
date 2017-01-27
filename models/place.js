'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

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
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: -90, max: 90 }
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: -180, max: 180 }
    },
    location: {
        type: Sequelize.ARRAY,
        allowNull: false,
        validate: { min: -180, max: 180 }
    }
}, {
    validate: {

    }
});

// require all the models

module.exports = Place;