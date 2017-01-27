'use strict';

// built-in modules
const path = require('path');

// npm packages
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const PORT = 3111;

// our modules
const db = require('./models/index.js');
const routes = require('./routes');

// init
const app = express();

// nunjucks rendering boilerplate
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

// middleware

app.use(volleyball);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routing
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));


// 404 catching
app.use(function (req, res, next) {
    let err = new Error('Not found');
    err.status = 404;
    next(err);
});

//Error Handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.send(err);
});

// Start
db.sync()
    .then(() => {
        app.listen(PORT, function () {
            console.log("LISTENING");
            console.log(`Listening @ http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error Starting Application: ', err);
    });
