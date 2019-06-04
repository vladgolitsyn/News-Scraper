var router = require("express").Router();
var newsRoutes = require("./news");

router.use("/headlines", newsRoutes);

module.exports = router;
