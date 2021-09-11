require("dotenv").config();
const httpError = require("../helpers/handleError");
const configModel = require("../modules/config");

const getConfig = async (req, res) => {
  try {
    const response = await configModel.findOne({});
    res.json({
      status: 200,
      data: response,
      msg: null,
    });
  } catch (error) {
    httpError(res, error);
  }
};

const createConfig = async (req, res) => {
  try {
    const { name, image, alt_image } = req.body;
    const response = await configModel.create({
      name,
      image,
      alt_image,
    });
    res.json({
      status: 201,
      data: response,
      msg: "Configuración guardada",
    });
  } catch (error) {
    httpError(res, error);
  }
};

const updateConfig = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, alt_image } = req.body;
    const response = await configModel.findByIdAndUpdate(
      id,
      {
        name,
        image,
        alt_image,
      },
      { new: true }
    );
    res.json({
      status: 201,
      data: response,
      msg: "Configuración actualizada",
    });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getConfig,
  createConfig,
  updateConfig,
};
