const mongoose = require('mongoose');

const AvatarSchema = new mongoose.Schema({
    picture: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Avatar', AvatarSchema);