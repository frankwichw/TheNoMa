var path = require("path");
var db = require("../models");

// routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/welcome", function(req, res) {
    var userScore;
    var userName = req.user.user_name;
    db.User.findOne({
      where: {
        id: req.user.id

      }
    }).then(function(e){
      userScore = req.user.dataValues.user_score;
      console.log(req.user)
      console.log(userScore);
      res.render("welcome", {username: userName, score: userScore});
    });
  });

  app.get("/draw", function(req, res) {
    res.render("draw");
  });

  app.get("/guess", function(req, res) {
    db.Drawing.findOne({ 
      exclude: {UserId: req.user.id}
    }).then(function(drawing) {
      // random drawing
      var randomDrawing = drawing.dataValues.drawing;
      var drawingDescriptor = drawing.dataValues.drawing_descriptor;
      var drawingID = drawing.dataValues.id;
      res.render("guess", {drawing: randomDrawing, answer: drawingDescriptor, id: drawingID});
    });

  });

};