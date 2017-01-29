const Sequelize = require('sequelize');
const db = require('./db.js');

let Days = db.define('day', {
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    getterMethods: {
        route: function() {
            return '/day/' + this.id;
        }
    }
});

module.exports = Days;


