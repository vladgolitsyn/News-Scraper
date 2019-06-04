const router = require("express").Router();
const newsController = require("../../controllers/news");

router.get("/", newsController.findAll);

module.exports = router;
