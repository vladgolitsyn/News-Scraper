var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  db.News.find({ saved: false })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("home", { articles: dbArticles });
    });
});

module.exports = router;
