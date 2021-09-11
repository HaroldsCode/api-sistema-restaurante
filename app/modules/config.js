const Mongoose = require('mongoose');
const ConfigScheme = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    alt_image: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = Mongoose.model('config', ConfigScheme);