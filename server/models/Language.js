const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    skillCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'SkillCategory'
    },
    name: {
        type: String
    },
    proficiency: {
        type: Number
    }
});

module.exports = mongoose.model('Language', LanguageSchema);