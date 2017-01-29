'use strict';
const db = require('./db');

const Hotels = require('./hotel');
const Places = require('./place');
const Activities = require('./activity');
const Restaurants = require('./restaurant');
const Days = require('./day');

Hotels.belongsTo(Places);
Restaurants.belongsTo(Places);
Activities.belongsTo(Places);

Days.hasOne(Hotels);
Days.hasMany(Restaurants);
Days.hasMany(Activities);


// Hotels.belongsToMany(Days, {through: DayCatalog});
// Restaurants.belongsToMany(Days, {through: DayCatalog});
// Activities.belongsToMany(Days, {through: DayCatalog});

module.exports = db;
