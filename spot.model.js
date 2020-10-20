const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Spot = new Schema({
    spot_zip: {
        type: String
    }
});

module.exports = mongoose.model('Spot', Spot)