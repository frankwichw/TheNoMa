// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cookieSession = require("cookie-session");
var passport = require("passport");

// requiring passport
var passportSetup = require("./authconfig/passport-setup.js");

// app variable and port
var app = express();
var PORT = process.env.PORT || 3000;

// use this static information to serve html
app.use('/public', express.static(__dirname + '/public'))

// sets up cookie session
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  // key ought to be in a separate file to gitignore for security 
  // but for our purposes we will leave it out

  keys: ["theNoMaencryptionkey"]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// sets up app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// require models for syncing
// once tim has models ready
var db = require("./models");


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routing
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/drawing-api-routes.js")(app);
require("./routes/guess-api-routes.js")(app);

// syncing sequelize models and starting app to listen at 3000 port
// pass { force: true } in the sync function to force it to remake your tables
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});