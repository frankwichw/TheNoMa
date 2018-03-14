
var db = require("../models");

module.exports = function (app) {

    // create new drawing
    app.post("/api/drawing", function (req, res) {
        db.Drawing.create(req.body).then(function (dbDrawing) {
            res.json(dbDrawing);
        });
    });

    // all drawings (w user info)
    app.get("/api/drawing/all", function (req, res) {
        db.Drawing.findAll({
            // include: [db.User]
        }).then(function (results) {
            res.json(results);
        });
    });

    // all drawings not guessed by a specific user
    app.get("/api/drawing/toGuess/:id", function (req, res) {
        db.Drawing.findAll({
            // where: [Sequelize.Op.NE]
            // include: [{
            // model: Guess,
            // where: {THE USER HAS NO GUESSES FOR A DRAWING}
            // }]
            //   include: [db.User]
        }).then(function (results) {
            res.json(results);
        });
    });

    // all guesses for specific drawing
    app.get("/api/drawing/guess/:id", function (req, res) {
        db.Drawing.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Guess]
        }).then(function (results) {
            res.json(results);
        });
    });

    // all drawing guesses for a user
    app.get("/api/drawing/guess/user/:id", function (req, res) {
        db.Drawing.findAll({
            attributes: ['drawing_descriptor'],
            raw: true,
            include: [{
                model: db.Guess,
                attributes: ['guess', 'rating'],
                where: { userId: req.params.id }
            }]
        }).then(function (results) {
            res.json(results);
        });
    });

}
