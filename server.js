// Organization name: WebJam Spotify Geolocator
// Project name: Spotify Geolocator
// MongoDB password (for both my account and database access): Spotify2020
// mongodb+srv://admin:<Spotify2020>@cluster0.a9yzs.mongodb.net/<Cluster0>?retryWrites=true&w=majority

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const spotRoutes = express.Router();

let Spot = require('./spot.model');

app.use(cors());
app.use(spotRoutes)
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:<Spotify2020>@cluster0.a9yzs.mongodb.net/<Cluster0>?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

spotRoutes.route('/').get(function(req, res) {
    Spot.find(function(err, spot) {
        if (err) {
            console.log(err);
        } else {
            res.json(spot);
        }
    });
});

spotRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Spot.findById(id, function(err, spot) {
        res.json(spot);
    });
});

spotRoutes.route('/update/:id').post(function(req, res) {
    Spot.findById(req.params.id, function(err, spot) {
        if (!spot)
            res.status(404).send("data is not found");
        else
            spot.spot_zip = req.body.spot_zip;

            spot.save().then(spot => {
                res.json('Spot updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

spotRoutes.route('/add').post(function(req, res) {
    let spot = new Spot(req.body);
    spot.save()
        .then(spot => {
            res.status(200).json({'spot': 'spot added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new spot failed');
        });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
});