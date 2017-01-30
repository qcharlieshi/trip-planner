const Sequelize = require('sequelize');
const db = require('./db.js');

let Days = db.define('day', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    hooks: {
        afterDestroy: function (day) {
            //figure out how to get current value destroyed and get all the values after that and decrement them
        }
    },
    getterMethods: {
        route: function() {
            return '/day/' + this.id;
        }
    }
});

module.exports = Days;


