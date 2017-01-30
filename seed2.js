let Promise = require('bluebird');
let db = require('./models/index.js');
let Place = require('./models/place');
let Hotel = require('./models/hotel');
let Restaurant = require('./models/restaurant');
let Activity = require('./models/activity');
let Day = require('./models/day');

db.sync({force: true})
    .then(() => {
        console.log("THIS IS synced");
    })
    .catch((err) => {
        console.error(err);
    });


