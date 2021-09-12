require('dotenv').config()
const router = require('express').Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (file) => {
    return file.split('.').shift();
}

fs.readdirSync(pathRouter).forEach(file => {
    const route = removeExtension(file);
    const validation = ['index'].includes(route);
    if(!validation){
        console.log(`http://localhost:${process.env.PORT}/api/${route}`)
        router.use(`/${route}`, require(`./${route}.js`))
    }
})

module.exports = router;