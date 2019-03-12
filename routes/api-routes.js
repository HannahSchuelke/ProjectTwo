// This file is for routes: displaying and saving data to the db

// Dependencies 
// var db = require("../models"); //Comment back in later (testing API)
const https = require("https");
const axios = require("axios");

// Routes
module.exports = function (app) {

    // ------- USERS --------


    // POST, create a new user
    app.post("/api/new", function (req, res) {
        console.log(req.body);
        db.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password //authenication key = will store hash password, not string password. like encryption. 
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
    // --------PREDICT HQ API (to search by area)------- (if song kick comes through -- boot this)

    app.get("/api/predictHQ", async (req, res) => {
        // const config = {
        //     "Authorization": "0akqMCro5pKNYGxlIdwORyhdvUBntq"
        // }       

        const token = "0akqMCro5pKNYGxlIdwORyhdvUBntq";

        const config = {
            headers: { 'Authorization': "Bearer " + token }
        }

        // const agent = new https.Agent(config);

        const url = "https://api.predicthq.com/v1/events/?place.scope=MSP"

        try {
            const predictHQData = await axios.get(url, config);

            console.log(predictHQData.data.results);
            const eventsInArea = predictHQData.data.results;

            for (let i = 0; i < eventsInArea.length; i++) {
                const artist = eventsInArea[i].title;

                // --------BANDS IN TOWN API (to search by concert)-------

                let bandInfo = await axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=oisacfioqwuuwfcenqou");
                bandInfo = bandInfo.data[0];

                console.log("bandinfo: ", bandInfo);
            }

            // you might need to look into promise.all for async (may not work with for loop)
            res.json("predictHQData")

        } catch (error) {
        }
    })

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
}
