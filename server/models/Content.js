const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    section: {
        type: mongoose.Types.ObjectId,
        ref: 'Section'
    },
    heading1: {
        type: String,
        require: true
    },
    heading2: {
        type: String
    },
    link: {
        type: String,
        require: true
    }, 
    image: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Content', ContentSchema);