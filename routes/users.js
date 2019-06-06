var express = require('express');
var router = express.Router();

//var userService = require('./../services/user-service');
var userService = require(`./../services/user-service`);

/* GET users listing. */
router.get('/users', function(req, res, next) {
	userService.getUsers()
	.then((result) => {
		res.render('user-management', {
		 title: "User List",
		 users: result
		});
	})
	.catch((err) => {
		res.render('error', { error: err });
		});
	});

//Call createUser() and pass in req.body values
router.post('/users/add', secured(), function(req, res, next) {
  var user = req.body;
  userService.createUser(user)
  .then((result) => {
	  res.render('user-profile', {
		  title: "'s Profile",
		  user: result
	  });
  }).catch((err) => {
	  res.render('login', {
		  title: 'Login'
	   });
  });
});

//take posted userDetails and delete user
router.get('/users/delete/:userName', secured(), function(req, res, next) {
	var userName = req.params.userName;
	userService.delUser(userName)
	.then(() => {
	    res.redirect('/users');
  	})
	.catch((err) => {
		res.render('error', { error: err });
	});
});

module.exports = router;
