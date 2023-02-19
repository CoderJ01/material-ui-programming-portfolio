const mongoose = require('mongoose');

const SkillCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    langauges: [{
        type: mongoose.Types.ObjectId,
        ref: 'Language'
    }]
});

module.exports = mongoose.model('SkillCategory', SkillCategorySchema);