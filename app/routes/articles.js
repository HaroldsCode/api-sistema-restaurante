const router = require("express").Router();
const { hasValues, existCategory, hiddenHasValue, restrictedHasValue } = require("../validations/articles");
const {
  getArticle,
  getOneArticleByID,
  getArticlesByType,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

router.get("/", getArticle);

router.get("/:id", getOneArticleByID);

router.get("/lista/:type", getArticlesByType);

router.post("/", hasValues, existCategory, createArticle);

router.put("/:id", hasValues, updateArticle);

router.delete("/:id", deleteArticle);

module.exports = router;
