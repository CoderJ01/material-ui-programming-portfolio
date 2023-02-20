const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const DescriptionSchema = moongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Description', DescriptionSchema);