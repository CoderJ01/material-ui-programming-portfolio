const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    proficiency: {
        type: Number
    }
});

module.exports = mongoose.model('Language', LanguageSchema);