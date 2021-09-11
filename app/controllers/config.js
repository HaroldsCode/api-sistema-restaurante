const httpError = require("../helpers/handleError");
const configModel = require("../modules/config");

const getConfig = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    httpError(res, error);
  }
};

const createConfig = async (req, res) => {
  try {
    const { name, image, alt_image } = req.body;
  } catch (error) {
    httpError(res, error);
  }
};

const updateConfig = async (req, res) => {
  try {
    const { name, image, alt_image } = req.body;
  } catch (error) {
    httpError(res, error);
  }
};

const deleteConfig = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
};
