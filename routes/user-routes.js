var db = require("../models");

module.exports = function(app) {
  // POST route for creating user
  app.post("/api/newuser", function(req, res) {
    console.log(req.body);
    db.User.create({
      user_name: req.body.name,
      user_password: req.body.password
    })
      .then(function(dbUser) {
        console.log(dbUser)
        res.json(dbUser);
      });
  });

  // GET route for logging in user
  app.get("api/userlogin", function(req, res){
    console.log(req.body);
    db.User.findOne({
      where: {
        user_name: req.body.name,
        user_password: req.body.password
      }
    })
  })
};