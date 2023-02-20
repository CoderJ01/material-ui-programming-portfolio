const mongoose = require('mongoose');

const ParagraphSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Paragraph', ParagraphSchema);