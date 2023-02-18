const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        require: true
    },
    content: [{
        type: mongoose.Types.ObjectId,
        ref: 'Content'
    }]
});

module.exports = mongoose.model('Section', SectionSchema);