const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contents: [{
        type: mongoose.Types.ObjectId,
        ref: 'Content'
    }]
});

module.exports = mongoose.model('Section', SectionSchema);