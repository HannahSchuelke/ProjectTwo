////////// DEPENDENCIES

var express = require('express');

///////// INITIALIZE EXPRESS

var app = express();

// SET UP PORT
var PORT = process.env.PORT || 8080;

// EXPRESS DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC DIRECTORY
app.use(express.static('public'));


// MODELS FOR SYNCING (Commented out for testing API)
// var db = require('./models');

/////////// ROUTES

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//////////// SYNC SEQUELIZE AND USE EXPRESS APP

// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log("App listening...")
//     })
// })

app.listen(PORT, function () {
    console.log("App listening...")
})