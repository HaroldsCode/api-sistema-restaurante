const Mongoose = require('mongoose');
const CategoriesScheme = new Mongoose.Schema({
    categories: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

module.exports = Mongoose.model('categories', CategoriesScheme);