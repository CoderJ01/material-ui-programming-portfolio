const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const DescriptionSchema = moongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Description', DescriptionSchema);