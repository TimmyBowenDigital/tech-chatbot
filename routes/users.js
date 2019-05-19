var express = require('express');
var router = express.Router();

var userService = require('./../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {
    title: "User List",
    users: userService.getUsers()
  });
});

router.post('/add', function(req, res, next) {
  var user = req.body;
  console.log(user);
  userService.createUser(user);
  res.redirect('/users');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
