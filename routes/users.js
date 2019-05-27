var express = require('express');
var router = express.Router();

//var userService = require('./../services/user-service');
var userList = require(`./../services/db-service`);

/* GET users listing. */
router.get('/', function(req, res, next) {
  userList.findAllUserRecords()
 .then((result) => {
   res.render('user', {
     title: "User List",
     users: result
   });
  })
 .catch(() => {
   res.render('error', { error: err });
 });
});

router.post('/add', function(req, res, next) {
  var user = req.body;
  userService.createUser(user);
  res.redirect('/users');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
