'use strict';

const router = require('express').Router();
const db = require('./models/index.js');

let Hotels = db.hotels;
let Restaurants = db.restaurants;
let Activities = db.activities;


router.get('/', function (req, res, next) {
    let hotelPromise = Hotels.findAll();
    let restaurantPromise = Restaurants.findAll();
    let activitiesPromise = Activities.findAll();

    Promise.all([hotelPromise, restaurantPromise, activitiesPromise])
        .then( function(stuffArray) {
            console.log(stuffArray[0]);


            res.render('index',
                {
                  templateHotels: stuffArray[0],
                  templateRestaurants: stuffArray[1],
                  templateActivities: stuffArray[2]
                })
        })
});

module.exports = router;
