
var db = require("../models");

module.exports = function (app) {

    // create new drawing
    app.post("/api/drawing", function (req, res) {
        db.Drawing.create(req.body).then(function (dbDrawing) {
            res.json(dbDrawing);
        });
    });

    // all guesses for specific drawing
    app.get("/api/drawing/guess/:id", function (req, res) {
        db.Drawing.findAll({
            attributes: ['drawing_descriptor'],
            raw: true,
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Guess,
                attributes: ['DrawingId', 'id', 'guess', 'userId', 'rating']
            }]
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
                attributes: ['DrawingId', 'id', 'guess', 'userId', 'rating'],
                where: { userId: req.params.id }
            }]
        }).then(function (results) {
            res.json(results);
        });
    });

}
