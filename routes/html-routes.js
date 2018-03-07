var path = require("path");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/draw", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/draw.html"));
  });

  // blog route loads blog.html
  app.get("/guess", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/guess.html"));
  });

  app.get("/vote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vote.html"));
  });

};