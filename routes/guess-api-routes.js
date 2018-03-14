
var db = require("../models");

module.exports = function (app) {

    // create new guess
    app.post("/api/guess", function (req, res) {
        db.Guess.create(req.body).then(function (dbGuess) {
            res.json(dbGuess);
        });
    });

    // update guess rating
    app.put("/api/rating", function (req, res) {
        db.Guess.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGuess) {
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
