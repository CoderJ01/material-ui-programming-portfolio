const mongoose = require('mongoose');

const IntroParagraphSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('IntroParagraph', IntroParagraphSchema);