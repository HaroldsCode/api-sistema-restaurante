const httpError = require('../helpers/handleError');

const hasValues =  ( req, res, next) => {
    try {
        const {name, type, price, image} = req.body;
        if(!!name && !!type && !!price && !!image)
            next();
        else
            res.json({ state: 403, data: null, msg: "Se espera que todos los campos se hayan sidos llenados" });
    } catch (error) {
        httpError(res, error)
    }
}

const hiddenHasValue = ( req, res, next ) => {
    try {
        const { hidden } = req.body;
        if(!!hidden){
            if(hidden.trim().toLowerCase() === "true" || hidden.trim().toLowerCase() === "false")
                next();
            else
                res.json({ state: 403, data: null, msg: "Solo se aceptan los string 'true' o 'false'" });
        }else
            res.json({ state: 403, data: null, msg: "Se espera el atributo 'restricted'" });
    } catch (error) {
        httpError(res, error)
    }
}

const restrictedHasValue = ( req, res, next ) => {
    try {
        const { restricted } = req.body;
        if(!!restricted){
            if(restricted.trim().toLowerCase() === "true" || restricted.trim().toLowerCase() === "false")
                next();
            else
                res.json({ state: 403, data: null, msg: "Solo se aceptan los string 'true' o 'false'" });
        }else
            res.json({ state: 403, data: null, msg: "Se espera el atributo 'restricted'" });
    } catch (error) {
        httpError(res, error)
    }
}

const convertStringToBoolean = ( string ) => {
    return (string === 'false') ? false : true
}
module.exports = {
    hasValues,
    hiddenHasValue,
    restrictedHasValue,
    convertStringToBoolean
}