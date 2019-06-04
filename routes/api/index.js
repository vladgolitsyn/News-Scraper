const router = require("express").Router();
const newsRoutes = require("./news");

router.use("/headlines", newsRoutes);

module.exports = router;
