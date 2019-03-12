// This file is for routes: displaying and saving data to the db

// Dependencies (grab the orm from the config)
var db = require("../models");

// Routes
module.exports = function (app) {

    // ------- USERS --------


    // POST, create a new user
    app.post("/api/new", function (req, res) {
        console.log(req.body);
        db.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(function (results) {
            res.end();
        });

    });


    // --------- EVENTS ----------

    // GET, all events
    app.get("/api/event", function (req, res) {
        db.Event.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // POST, new event
    app.post("/api/event", function (req, res) {
        db.Event.create(req.body).then(function (results) {
            res.json(results);
        });
    });

    // PUT, for updating events
    app.put("/api/event", function (req, res) {
        db.Event.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (results) {
                res.json(results);
            });
    });

    // ------- NEWSFEED ---------- 

    // GET, add event & users (who are also going) to newsfeed
    app.get("/api/attendee/:id", function (req, res) {
        // 2; Add a join to include all of the Author's Posts here
        db.Attendee.findAll({
            // can put include before or after the way, but not in where
            include: [{ model: db.attendee }],
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });


// DESTROY, remove event from newsfeed