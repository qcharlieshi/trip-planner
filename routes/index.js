'use strict';

const router = require('express').Router();
const db = require('../models/index.js');
let Hotels = require('../models/hotel');
let Restaurants = require('../models/restaurant');
let Activities = require('../models/activity');
let Days = require('../models/day');
let mapData = require('../js/map.js');

router.get('/', function (req, res, next) {
    let hotelPromise = Hotels.findAll();
    let restaurantPromise = Restaurants.findAll();
    let activitiesPromise = Activities.findAll();

    // Promise.all([hotelPromise, restaurantPromise, activitiesPromise])
    //     .then( function(stuffArray) {
    //
    //         res.render('index',
    //             {
    //               templateHotels: stuffArray[0],
    //               templateRestaurants: stuffArray[1],
    //               templateActivities: stuffArray[2]
    //             })
    //     })


    //Days

    Days.findAll().then(day => {
        res.render('index', { templateDays: day })
    })

});


router.get('/day/:id', function(req, res, next) {
    let currentDay = req.params.id;
    Days.findAll().then(day => {
        res.render('index', { templateDays: day, current: currentDay })
    })
});

router.post('/day/:id', function(req, res, next) {
    console.log('in post');
    Days.create({
        date: Date.now()
    })
        .then((createdDay) => {
            console.log(createdDay);
            res.redirect(`/day/${req.body.id}`)
        })
        .catch((err) => {
        console.error(err);
        });


        // .then((day, created) => {
        //     console.log('created');
        //     //console.log(day);
        //     res.redirect('/day/' + req.params.id)
        // })
});

router.get('/day/delete/:id', function(req, res, next){
    console.log("THIS IS DESTROYING");
    Days.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            console.log('should be gone');
            res.redirect('/')
        })
        .catch((err) => {
        console.error(err)
        })
});

module.exports = router;
