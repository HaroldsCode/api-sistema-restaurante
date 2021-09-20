const httpError = require("../helpers/handleError");
const articleModel = require("../modules/articles");
const { convertStringToBoolean } = require('../validations/articles');

const getArticle = async (req, res) => {
  try {
    const response = await articleModel.find({});
    res.json({
      status: 200,
      data: response,
      msg: null,
    });
  } catch (error) {
    httpError(res, error);
  }
};

const getOneArticleByID = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await articleModel.find({ _id: id });
    res.json({
      status: 200,
      data: response,
      msg: null,
    });
  } catch (error) {
    console.log(error);
    httpError(res, error);
  }
};

const getArticlesByType = async (req, res) => {
  try {
    const { type } = req.params;
    const response = await articleModel.find({ type });
    res.json({
      status: 200,
      data: response,
      msg: null,
    });
  } catch (error) {
    console.log(error);
    httpError(res, error);
  }
};

const createArticle = async (req, res) => {
  try {
    const { name, type, price, hidden, restricted } = req.body;
    const response = await articleModel.create({
      name,
      type,
      price: parseInt(price),
      hidden: convertStringToBoolean(hidden),
      restricted: convertStringToBoolean(restricted)
    });
    res.json({
      status: 201,
      data: response,
      msg: "Articulo creado",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, price } = req.body;
    const response = await articleModel.findByIdAndUpdate(
      id ,
      {
        name,
        type,
        price: parseInt(price),
      },{
        new: true
      }
    );
    res.json({
      status: 201,
      data: response,
      msg: "Articulo actualizado",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updateVisibilityArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { hidden } = req.body;
    const response = await articleModel.updateOne( { id }, { hidden: convertStringToBoolean(hidden) } );
    res.json({
      status: 201,
      data: response,
      msg: null,
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updateRestintionArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { restricted } = req.body;
    const response = await articleModel.updateOne( { id }, { restricted: convertStringToBoolean(restricted) } );
    res.json({
      status: 201,
      data: response,
      msg: null,
    });
  } catch (error) {
    httpError(res, error);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await articleModel.findByIdAndDelete(id);
    res.json({
      status: 200,
      data: response,
      msg: "Se ha eliminado un artículo",
    });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getArticle,
  getOneArticleByID,
  getArticlesByType,
  createArticle,
  updateArticle,
  updateRestintionArticle,
  updateVisibilityArticle,
  deleteArticle,
};
