const mongoose = require('mongoose');

const challengeSchema = mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: false},
    videoLink:{type: String, required: false},
    task:{type: String},
    reward:{type: String},
    rating:{type: Number}
});

module.exports = mongoose.model('Challenge', challengeSchema);