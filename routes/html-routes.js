var path = require("path");
var db = require("../models");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/welcome", function(req, res) {
  //  res.send("Hello! Your ID is: " + req.user.id + "\nYour name is: " + req.user.user_name);
    var userName = req.user.user_name;
    res.render("welcome", {username: userName});
  });

  app.get("/draw", function(req, res) {
    res.render("draw");
  });

  app.get("/guess", function(req, res) {
    db.Drawing.findOne({ 
      exclude: {UserId: req.user.id},
      random: true
    }).then(function(drawing) {
      console.log(drawing.dataValues);
      // random drawing
      var randomDrawing = drawing.dataValues.drawing;
      res.render("guess", {drawing: randomDrawing});
    });

  });

};