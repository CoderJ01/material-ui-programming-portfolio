const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    skillCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'SkillCategory'
    },
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Language', LanguageSchema);