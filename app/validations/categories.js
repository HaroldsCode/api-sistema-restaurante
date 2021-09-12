const httpError = require("../helpers/handleError");
const categoriesModel = require("../modules/categories");

const hasValues = (req, res, next) => {
    const { category } = req.body;
    if(!!category){
        next();
    }else{
        res.json({
            status: 403,
            data: null,
            msg: "Se necesita que agrege una categoría"
        });
    }
}

const canIDoThis = async (req, res, next) => {
    try {
        const { category } = req.body;
        const categories = await categoriesModel.find({category: removeAcent(category)}, {_id: 0, category: 1}).count();
        console.log(categories)
        if (categories > 0){
            res.json({
                status: 403,
                data: null,
                msg: `Ya se encuentra una categoría ${category}`
            });
        }else{
            next();
        }
    } catch (error) {
        httpError(res, error);
    }
}

const canIDelete = async (req, res, next) => {
    try{
        const { id } = req.params;
        const categories = await categoriesModel.find({}, {_id: 1, category: 0});
        if (categories.find(item => item.id === id)){
            next();
        }else{
            res.json({
                status: 403,
                data: null,
                msg: `No existe el id ${id} en la base de datos`
            });
        }
    } catch (error) {
        httpError(res, error);
    }
}

const removeAcent = (string) =>{
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return string.trim().split('').map( letra => acentos[letra] || letra).join('').toString().toUpperCase();	
}

module.exports = {
    hasValues,
    canIDoThis,
    canIDelete,
    removeAcent
}