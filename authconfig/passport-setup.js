var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var db = require("../models/users.js");

passport.serializeUser((user, done)=> {
    done(null, user.id);
});

passport.deserializeUser((userId, done)=> {
    db.User.findOne({where: {id: userId}}).then(function(user) {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: "415416292957-v6etmpjbrjdqult2aq561f4em40g9f9t.apps.googleusercontent.com",
        clientSecret: "e3TXzHRGMAaQKc5Pvfzypq-u",
        callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done)=>{
        // passport callback function
        // check if user exists
        db.Users.findOne({where: {user_id: profile.id}}).then(function(currentUser) {
            // We have access to the todos as an argument inside of the callback function
            if(currentUser){
                // already have a user
                console.log("Current user is: " + currentUser);
                done(null, currentUser);
            } else {
                // if not, create user
                db.Users.create({
                    user_id: profile.id,
                    user_name: profile.displayName
                  }).then(function(newUser) {
                    // We have access to the new todo as an argument inside of the callback function
                    console.log("User created: " + newUser);
                    done(null, newUser.dataValues);
                });
            }
        });
    })
)