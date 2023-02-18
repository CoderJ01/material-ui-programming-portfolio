const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    section: {
        type: mongoose.Types.ObjectId,
        ref: 'Section'
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
    }
});

module.exports = mongoose.model('Content', ContentSchema);