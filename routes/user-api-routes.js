
var db = require("../models");

module.exports = function (app) {

    // update user score
    app.put("/api/score", function (req, res) {
        db.User.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUser) {
                res.json(dbUser);
            });
    });

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
            attributes: ['user_name', 'user_score'],
            raw: true,
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Drawing,
                attributes: ['UserId', 'drawing', 'drawing_descriptor']
            }]
        }).then(function (results) {
            res.json(results);
        });
    });

    // all drawings
    app.get("/api/drawing/all", function (req, res) {
        db.User.findAll({
            attributes: ['user_name', 'user_score'],
            raw: true,
            include: [{
                model: db.Drawing,
                attributes: ['UserId', 'drawing', 'drawing_descriptor']
            }]
        }).then(function (results) {
            res.json(results);
        });
    });
    
    // a specific drawing
    app.get("/api/drawing/:id", function (req, res) {
        db.User.findOne({
            attributes: ['user_name', 'user_score'],
            raw: true,
            include: [{
                model: db.Drawing,
                where: { id: req.params.id },
                attributes: ['UserId', 'drawing', 'drawing_descriptor']
            }]
        }).then(function (results) {
            res.json(results);
        });
    });

}
