const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: String},
    videoId: {type: String},
    ambienceType: {type: String},
    cardImage: {type: String},
    hiddenCardImage: {type: String},
    bImage: {type: String},
    bAmbience: {type: String},
    bImageOpacity: {type: Number},
    bAmbienceOpacity: {type: Number},
    shadow: {type: String}
})

module.exports = mongoose.model('Category', categorySchema);