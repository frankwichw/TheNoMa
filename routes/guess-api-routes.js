
var db = require("../models");

module.exports = function (app) {

    // create new guess
    app.post("/api/guess", function (req, res) {
        var userID = req.user.id;
        console.log("user id: " + userID);
        console.log("req.body below:");
        console.log(req.body);
        var guessObj = {
            guess: req.body.guess,
            userId: userID,
            rating: req.body.rating,
            DrawingId: req.body.DrawingId
        }
        db.Guess.create(guessObj).then(function (dbGuess) {
            res.json(dbGuess);
        });
    });

    // all guesses
    app.get("/api/guess/all", function (req, res) {
        db.Guess.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // a specific guess
    app.get("/api/guess/:id", function (req, res) {
        db.Guess.findOne({
            where: {
                id: req.params.id
            },
        }).then(function (results) {
            res.json(results);
        });
    });

}
