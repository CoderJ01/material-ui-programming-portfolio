const mongoose = require('mongoose');
import LanguageSchema from './Language';

const SkillSchema = new mongoose.Schema({
    title: {
        type: String
    },
    langauges: [LanguageSchema]
});

module.exports = mongoose.model('Skill', SkillSchema);