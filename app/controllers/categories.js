const httpError = require("../helpers/handleError");
const { removeAcent } = require("../validations/categories");
const categoriesModel = require("../modules/categories");

const getCategories = async (req, res) => {
  try {
    const response = await categoriesModel.find({});
    res.json({
      status: 200,
      data: response,
      msg: null,
    });
  } catch (error) {
    httpError(res, error);
  }
};

const createCategories = async (req, res) => {
  try {
    const { category } = req.body;
    const response = await categoriesModel.create({ category: removeAcent(category) });
    res.json({
      status: 201,
      data: response,
      msg: "Categoria creada",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updateCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    const response = await categoriesModel.findByIdAndUpdate(
      id,
      { category: removeAcent(category) },
      { new: true }
    );
    res.json({
      status: 201,
      data: response,
      msg: "Categoria actualizada",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await categoriesModel.findByIdAndDelete(id);
    res.json({
      status: 200,
      data: response,
      msg: "Se ha eliminado una categoria",
    });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
