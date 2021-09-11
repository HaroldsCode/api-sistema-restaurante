const httpError = require("../helpers/handleError");
const categoriesModel = require("../modules/categories");

const canIDoThis = async (req, res, next) => {
    try {
        const { category } = req.body;
        const categories = await categoriesModel.find({}, {_id: 0, category: 1});
        if (categories.find(item => item === this.removeAcent(category))){
            res.json({
                status: 403,
                data: null,
                msg: `Ya se encuentra usa categoría ${category}`
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
        if (categories.find(item => item === id)){
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
    canIDoThis,
    canIDelete,
    removeAcent
}