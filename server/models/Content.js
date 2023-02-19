const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    heading1: {
        type: String,
        required: true
    },
    heading2: {
        type: String
    },
    link: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    sectionId: {
        type: mongoose.Types.ObjectId,
        ref: 'Section'
    },
});

module.exports = mongoose.model('Content', ContentSchema);