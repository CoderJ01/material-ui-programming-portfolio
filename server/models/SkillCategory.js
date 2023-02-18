const mongoose = require('mongoose');
import LanguageSchema from './Language';

const SkillCategorySchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    langauges: [LanguageSchema]
});

module.exports = mongoose.model('SkillCategory', SkillCategorySchema);