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

    }).then(function (e) {
      userScore = req.user.dataValues.user_score;
      // console.log(req.user)
      // console.log(userScore);

      res.render("welcome", { username: userName, score: userScore });
    });
  });

  app.get("/draw", function (req, res) {
    res.render("draw", { userID: req.user.id });
  });

  // Find a drawing for guess
  app.get("/guess", function (req, res) {
    // build the query to find drawings not guessed by guessUID 
    var qry = "SELECT DISTINCT drawings.UserId, users.user_score, drawing_descriptor, drawings.id, drawings.drawing";
    qry += " FROM noma_db.drawings";
    qry += " LEFT JOIN noma_db.users ON noma_db.drawings.userId = noma_db.users.id";
    qry += " LEFT JOIN noma_db.guesses ON noma_db.drawings.id = noma_db.guesses.DrawingId";
    qry += " WHERE drawings.UserId <> :guessUID AND ";
    qry += " ( guesses.userId IS NULL OR guesses.DrawingId NOT IN";
    qry += " (SELECT DrawingID FROM noma_db.guesses WHERE userId = :guessUID )";
    qry += " );";
    // console.log(qry);

    // execute the query and save result as object dwgstoguess
    db.sequelize.query(qry, { replacements: { guessUID: req.user.id }, type: db.sequelize.QueryTypes.SELECT }).then(dwgstoguess => {
      if (dwgstoguess.length < 1) {
        console.log("There are no drawings for you to guess.");
        res.redirect("/welcome");
        return
      }
      // console.log(dwgstoguess);
      // console.log("length: ", dwgstoguess.length);

      // find a random number from the range of drawings to guess and save to drawingData  
      var randomNumber = Math.floor(Math.random() * dwgstoguess.length);
      var drawingData = dwgstoguess[randomNumber];
      // console.log(drawingData);

        // format data to pass into html
        var guessData = {
          "guessUID": req.user.id,
          "artistID": drawingData.UserId,
          "answer": drawingData.drawing_descriptor,
          "drawingID": drawingData.id,
          "user_score": drawingData.user_score,
          "drawing": drawingData.drawing
        }
        // console.log(guessData);
        // res.json(results);
        res.render("guess", guessData);
      });
    });
};