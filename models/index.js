'use strict';
const db = require('./db');

const Hotels = require('./hotel');
const Places = require('./place');
const Activities = require('./activity');
const Restaurants = require('./restaurant');
const Days = require('./day');

Hotels.belongsTo(Places, {as: 'hotels'});
Restaurants.belongsTo(Places, {as: 'restaurants'});
Activities.belongsTo(Places, {as: 'activities'});

Days.hasOne(Hotels);
Days.hasMany(Restaurants);
Days.hasMany(Activities);

module.exports = db;
