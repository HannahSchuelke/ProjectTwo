////////// DEPENDENCIES

var express = require('express');
var jwt_express = require('express-jwt');
require("dotenv").config();

///////// INITIALIZE EXPRESS

var app = express();

// SET UP PORT
var PORT = process.env.PORT || 8080;

// EXPRESS DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC DIRECTORY
app.use(express.static('public'));


//tell express to use JSON WebTokens. JWT-Express will autofill req.user with the user details
app.use(jwt_express({ secret: JWT_SECRET_KEY }).unless({ path: ['/token', '/favicon.ico'] }));


/////////// ROUTES

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//////////// SYNC SEQUELIZE AND USE EXPRESS APP

db.sequelize.sync()
    .then(function () {
        return db.User.create({
            username: TEST_USER.username,
            password: TEST_USER.password
        })
    })
    .then(function () {
        app.listen(PORT, function () {
            console.log("App listening...")
        })
    })