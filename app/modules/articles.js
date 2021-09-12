const Mongoose = require('mongoose');
const ArticleScheme = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    hidden: {
        type: Boolean,
        default: true
    },
    restricted: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = Mongoose.model('articles', ArticleScheme);