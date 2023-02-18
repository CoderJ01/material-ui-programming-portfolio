const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: Number,
        required: true
    },
    skillCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'SkillCategory'
    },
});

module.exports = mongoose.model('Language', LanguageSchema);