const router = require("express").Router();
const { hasValues, hiddenHasValue, restrictedHasValue } = require("../validations/articles");
const {
  getArticle,
  getOneArticleByID,
  getArticlesByType,
  createArticle,
  updateArticle,
  updateVisibilityArticle,
  updateRestintionArticle,
  deleteArticle,
} = require("../controllers/articles");

router.get("/", getArticle);

router.get("/:id", getOneArticleByID);

router.get("/lista/:type", getArticlesByType);

router.post("/", hasValues, createArticle);

router.put("/:id", hasValues, updateArticle);

router.patch("/hidden/:id", hiddenHasValue, updateVisibilityArticle);

router.patch("/restricted/:id", restrictedHasValue, updateRestintionArticle);

router.delete("/:id", deleteArticle);

module.exports = router;
