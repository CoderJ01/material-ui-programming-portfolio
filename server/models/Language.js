const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: Number,
        required: true
    },
    skillCategoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'SkillCategory'
    },
});

module.exports = mongoose.model('Language', LanguageSchema);