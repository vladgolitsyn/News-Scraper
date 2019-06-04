// Controller for news articles

var db = require("../models");

module.exports = {
  // Find all headlines, sort them by date, and return to client
  findAll: function(req, res) {
    db.news
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbNews) {
        res.json(dbNews);
      });
  }
};
