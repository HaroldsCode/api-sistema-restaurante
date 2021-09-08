const mongoose = require('mongoose');

const dbConnect = () => {
    const DB = process.env.DB_CONNECTION;
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}

module.exports = dbConnect;