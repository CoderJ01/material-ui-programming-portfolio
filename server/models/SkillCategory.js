const mongoose = require('mongoose');

const SkillCategorySchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    langauges: [{
        type: Schema.Types.ObjectId,
        ref: 'Language'
    }]
});

module.exports = mongoose.model('SkillCategory', SkillCategorySchema);