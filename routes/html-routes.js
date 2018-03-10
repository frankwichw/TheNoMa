var path = require("path");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/welcome", function(req, res) {
    res.render("welcome");
  });

  // blog route loads blog.html
  app.get("/draw", function(req, res) {
    res.render("draw");
  });

  app.get("/guess", function(req, res) {
    res.render("guess");
  });

};