// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// app variable and port
var app = express();
var PORT = process.env.PORT || 3000;

// sets up app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// require models for syncing
// once tim has models ready
var db = require("./models");

// use this static information to serve html
app.use(express.static("public"));

// routing
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// syncing sequelize models and starting app to listen at 3000 port
// pass { force: true } in the sync function to force it to remake your tables
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
