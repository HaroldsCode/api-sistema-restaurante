const httpError = require('../helpers/handleError');

const hasValues = async ( req, res, next) => {
    try {
        const {name, type, price, image, ingredients} = req.body;
        if(!!name && !!type && !!price && !!image && !!ingredients)
            next();
        else
            res.json({ state: 403, data: null, msg: "Se espera que todos los campos se hayan sidos llenados" });
    } catch (error) {
        httpError(res, error)
    }
}


module.exports = {
    hasValues
}