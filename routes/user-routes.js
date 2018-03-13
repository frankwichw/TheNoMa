var db = require("../models");
var passport = require("passport");

module.exports = function(app) {
  app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile"]
  }));

  // redirect route
  app.get("/auth/google/redirect", passport.authenticate("google"), function(req, res){
    // res.send(req.user);
    // to request currently logged in user use req.user
    res.redirect("/welcome");
  })
};