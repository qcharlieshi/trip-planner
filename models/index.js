'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

const Hotels = require('./hotel');
const Places = require('./place');
const Activities = require('./activity');
const Restaurants = require('./restaurant');

Hotels.belongsTo(Place);
Restaurant.belongsTo(Place);
Activities.belongsTo(Place);

module.exports = db;
