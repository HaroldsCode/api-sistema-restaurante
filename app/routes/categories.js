const router = require("express").Router();
const { hasValues, canIDelete, canIDoThis } = require("../validations/categories");
const {
  getCategories,
  getCategoryById,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories");

router.get("/", getCategories);

router.get("/:id", getCategoryById);

router.post("/", hasValues, canIDoThis, createCategories);

router.put("/:id", hasValues, canIDoThis, updateCategories);

router.delete("/:id", canIDelete, deleteCategories);

module.exports = router;