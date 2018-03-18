var path = require("path");
var db = require("../models");

// routes
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/welcome", function (req, res) {
    var userScore;
    var userName = req.user.user_name;
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (user) {
      userScore = user.user_score;
      console.log(userScore);
      res.render("welcome", { username: userName, score: userScore });
    });
  });

  app.get("/draw", function (req, res) {
    res.render("draw", { userID: req.user.id });
  });

  // Find a drawing for guess
  app.get("/guess", function (req, res) {

    // find one drawing
    db.Drawing.findOne({
      attributes: ['UserId', 'drawing_descriptor', 'id', 'drawing'],
      // test that the drawing's creator is not the user logged on
      where: { userId: { [db.Sequelize.Op.ne]: req.user.id } }
    }).then(function (drawingData) {
      // var artistID = drawingData.dataValues.UserId;
      // var descriptor = drawingData.dataValues.drawing_descriptor;
      var drawingID = drawingData.dataValues.id;

      // find user score for drawing found above
      db.User.findOne({
        attributes: [['id', 'drawingUID'], 'user_name', 'user_score'],
        include: [{
          model: db.Drawing,
          where: { id: drawingID }
        }]
      }).then(function (userData) {
        // format data to pass into html
        var guessData = {
          "guessUID": req.user.id,
          "artistID": drawingData.dataValues.UserId,
          "answer": drawingData.dataValues.drawing_descriptor,
          "drawingID": drawingID,
          "user_name": userData.dataValues.user_name,
          "user_score": userData.dataValues.user_score,
          "drawing": drawingData.dataValues.drawing
        }
        // res.json(results);
        res.render("guess", guessData);
      });
    });
  });

};