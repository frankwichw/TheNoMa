
var db = require("../models");

module.exports = function (app) {

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
