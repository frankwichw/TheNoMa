
var db = require("../models");

module.exports = function (app) {

    // all users
    app.get("/api/user/all", function (req, res) {
        db.User.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // a specific user
    app.get("/api/user/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
        }).then(function (results) {
            res.json(results);
        });
    });

    // all drawings for specific user
    app.get("/api/user/drawing/:id", function (req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Drawing]
        }).then(function (results) {
            res.json(results);
        });
    });

    // a specific drawing
    app.get("/api/drawing/:id", function (req, res) {
        db.User.findOne({
            attributes: ['id', 'user_name', 'user_score'],
            raw: true,
            include: [{
                model: db.Drawing,
                where: { id: req.params.id },
                attributes: ['drawing', 'drawing_descriptor']
            }]
        }).then(function (results) {
            res.json(results);
        });
    });
}
