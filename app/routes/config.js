const router = require("express").Router();
const {
  getConfig,
  createConfig,
  updateConfig
} = require("../controllers/config");

router.get("/", getConfig);

router.post("/", createConfig);

router.put("/:id", updateConfig);

module.exports = router;
