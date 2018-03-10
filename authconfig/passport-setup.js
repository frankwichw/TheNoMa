var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");

passport.use(
    new GoogleStrategy({
        clientID: "415416292957-v6etmpjbrjdqult2aq561f4em40g9f9t.apps.googleusercontent.com",
        clientSecret: "e3TXzHRGMAaQKc5Pvfzypq-u",
        callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done)=>{
        // passport callback function
        console.log(profile);
    })
)