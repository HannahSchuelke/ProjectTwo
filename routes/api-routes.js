// This file is for routes: displaying and saving data to the db

// Dependencies (grab the orm from the config)
var db = require("../models");

// Routes
module.exports = function (app) {

// ------- USERS --------

// POST, create a new user
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(results) {
      res.end();
    });
  });

// DESTROY, delete user
  app.delete("/api/new/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // --------- EVENTS ----------

  // GET, all events
  app.get("/api/event", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // POST, new event
  app.post("/api/event", function(req, res) {
    db.Event.create(req.body).then(function(results) {
      res.json(results);
    });
  });

// PUT, for updating events
app.put("/api/event", function(req, res) {
    db.Event.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(results) {
      res.json(results);
    });
  });

// ------- NEWSFEED ---------- 

// GET, add event & users (who are also going) to newsfeed
app.get("/api/event", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Event.findAll({
      // when we use include, we need to make it an array
      // this is just in case we we trying to to find multiple
      include: [{model:db.Event}]    
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
    });
// put/destroy, remove event from newsfeed




