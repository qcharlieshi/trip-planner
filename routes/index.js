'use strict';

const router = require('express').Router();
const db = require('../models/index.js');
let Hotels = require('../models/hotel');
let Restaurants = require('../models/restaurant');
let Activities = require('../models/activity');

router.get('/', function (req, res, next) {
    let hotelPromise = Hotels.findAll();
    let restaurantPromise = Restaurants.findAll();
    let activitiesPromise = Activities.findAll();

    Promise.all([hotelPromise, restaurantPromise, activitiesPromise])
        .then( function(stuffArray) {

            res.render('index',
                {
                  templateHotels: stuffArray[0],
                  templateRestaurants: stuffArray[1],
                  templateActivities: stuffArray[2]
                })
        })
});

module.exports = router;
