const httpError = require('../helpers/handleError');

const hasValues =  ( req, res, next) => {
    try {
        const {name, type, price} = req.body;
        if(!!name && !!type && !!price)
            next();
        else
            res.json({ state: 403, data: null, msg: "Se espera que todos los campos hayan sidos llenados" });
    } catch (error) {
        httpError(res, error)
    }
}

const hiddenHasValue = ( req, res, next ) => {
    try {
        const { hidden } = req.body;
        if(typeof hidden === "boolean"){
            next();
        } else if(!!hidden){
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
        if(typeof restricted === "boolean"){
            next();
        } else if(!!restricted){
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
    if(typeof string === "boolean")
        return string;
    else if(!!string)
        return (string === 'false') ? false : true;
    else
        return true;
}
module.exports = {
    hasValues,
    hiddenHasValue,
    restrictedHasValue,
    convertStringToBoolean
}