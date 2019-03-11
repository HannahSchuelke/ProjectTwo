////////// DEPENDENCIES


    var express = require('express');



///////// INITIALIZE EXPRESS

    var app = express();

    // SET UP PORT
    var PORT = process.env.PORT || 8080;

    // EXPRESS DATA PARSING
    app.use(express.urlencoded({ extended:true }));
    app.use(express.json());

    // STATIC DIRECTORY
    app.use(express.static('public'));


    // MODELS FOR SYNCING
    var db = require('./models');




/////////// ROUTES


    require('../routes')



//////////// SYNC SEQUELIZE AND USE EXPRESS APP

    db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening...")
        })
    })