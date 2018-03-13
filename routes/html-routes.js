var path = require("path");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/welcome", function(req, res) {
  //  res.send("Hello! Your ID is: " + req.user.id + "\nYour name is: " + req.user.user_name);
    console.log(req.user.user_name);
    var userName = req.user.user_name;
    res.render("welcome", {username: userName});
  });

  app.get("/draw", function(req, res) {
    res.render("draw");
  });

  app.get("/guess", function(req, res) {
    res.render("guess");
  });

};