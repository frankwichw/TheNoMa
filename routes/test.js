
//WHY DOES THIS WORK but row 9 does not?
    // all guesses (w user info)
    app.get("/api/guess/all", function (req, res) {
        db.Guess.findAll({
            include: [db.Drawing]
        }).then(function (results) {
            res.json(results);
        });
    });

    app.get("/api/guess/raw", function (req, res) {
        db.Guess.findAll({
            include: [db.Drawing],
            raw: true
        }).then(function (results) {
            res.json(results);
        });
    });
    
    app.get("/api/user/fields", function (req, res) {
        db.User.findAll({
            attributes: ['id', 'user_name', 'user_score'],
            raw: true,
            include: [{ model: db.Drawing, attributes: ['drawing_descriptor'] }]
        }).then(function (results) {
            res.json(results);
        });
    });
