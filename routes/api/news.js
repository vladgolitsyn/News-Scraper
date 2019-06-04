var router = require("express").Router();
var newsController = require("../../controllers/news");

router.get("/", newsController.findAll);

module.exports = router;
