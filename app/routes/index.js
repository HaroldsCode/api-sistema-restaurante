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
        router.use(`/${route}`, require(`./${route}.js`))
    }
})

module.exports = router;