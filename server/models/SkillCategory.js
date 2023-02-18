const mongoose = require('mongoose');
import LanguageSchema from './Language';

const SkillCategorySchema = new mongoose.Schema({
    title: {
        type: String
    },
    langauges: [LanguageSchema]
});

module.exports = mongoose.model('SkillCategory', SkillCategorySchema);