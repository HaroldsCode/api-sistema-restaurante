const router = require("express").Router();
const { canIDelete, canIDoThis } = require("../validations/categories");
const {
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categories");

router.get("/", getCategories);

router.post("/", canIDoThis, createCategories);

router.put("/:id", canIDoThis, updateCategories);

router.delete("/:id", canIDelete, deleteCategories);

module.exports = router;