  
const router = require('express').Router();
// requiring the mongoose model that was created
let User = require('../models/user.model');

// endpoint that handles incoming HTTP GET requests on the "url/users" path
// route url: localhost5000/users/ makes the following happen:
router.route('/').get((req, res) => {
    // mongoose method that gets a list of all the users from the mongodb database
    // find method returns a promise
  User.find()
    //return list of users in json format
    .then(users => res.json(users))
    // if error:
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests
// route url: localhost5000/users/add
router.route('/add').post((req, res) => {
  const username = req.body.username;
// creating a new instance of the user using the username variable
  const newUser = new User({username});
// saving the user
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//standard thing to do
module.exports = router;