const mongoose = require('mongoose');

const IntroductionSchema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Introduction', IntroductionSchema);