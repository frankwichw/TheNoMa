var db = require("../models");

// routes needed: 
// getting new user and inserting into database
User.create({ username: 'barfooz', isAdmin: true }, { fields: [ 'username' ] }).then(user => {
  // let's assume the default of isAdmin is false:
  console.log(user.get({
    plain: true
  })) // => { username: 'barfooz', isAdmin: false }
});
// logging in old user (checking databse to see if there's a username match)
// showing username and points earned
// getting new drawing stored
// bringing drawing out in order to display
// bringing all drawings out/a selection of drawings out to display
// awarding points 

// routes
module.exports = function(app) {

};