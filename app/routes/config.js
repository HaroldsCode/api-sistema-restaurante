const router = require("express").Router();
const {
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
} = require("../controllers/config");

router.get("/", getConfig);

router.post("/", createConfig);

router.put("/:id", updateConfig);

router.delete("/:id", deleteConfig);

module.exports = router;
