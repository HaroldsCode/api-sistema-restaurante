const httpError = require("../helpers/handleError");
const { removeAcent } = require("../validations/categories");
const categoriesModel = require("../modules/categories");
const articleModel = require("../modules/articles");

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

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await categoriesModel.findOne({ _id: id });
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
      { new: false }
    );
    updater(response.category, category)
    res.json({
      status: 201,
      data: null,
      msg: "Categoria actualizada",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updater = async (category, type) => {
  const articles = await articleModel.find({ type: removeAcent(category) })
  articles.forEach(async (article) => {
    await articleModel.updateOne({ _id: article._id }, { type: removeAcent(type) })
  })
}

const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoriesModel.findOne({ _id: id } ,{ category: 1 , _id: 0 });
    const response = await categoriesModel.findByIdAndDelete(id);
    deleter(category)
    res.json({
      status: 200,
      data: response,
      msg: "Se ha eliminado una categoria",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const deleter = async (type) => {
  const articles = await articleModel.find({ type: type.category })
  articles.forEach(async (article) => {
    await articleModel.deleteOne({ _id: article._id })
  })
}

module.exports = {
  getCategories,
  getCategoryById,
  createCategories,
  updateCategories,
  deleteCategories,
};
