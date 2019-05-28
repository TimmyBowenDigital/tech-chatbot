var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var loginService = require('./../services/login-service');
var userService = require('./../services/user-service');


router.get('/', function(req, res, next) {
  if (("userCookie" in req.cookies) && req.cookies.userCookie != null ) {
    res.redirect('/chat');
    console.log("Login Successful");
  } else {
    res.render('login', { title: 'Login' });
  }
});

router.post('/sign-in', function(req, res, next) {
  var userID = req.body.userID;
  //End result will be userID and password passed through to login-service
  if (loginService.authenticate(userID)) {
    if (auth_outcome) {
      res.cookie('userCookie', userID);
    }
    res.redirect('/chat');
  } else {
    console.log("Incorrect details error");
  };
});

router.get('/logout', function(req, res, next) {

});

router.get('/register', function(req, res, next) {
  if (("userCookie" in req.cookies) && req.cookies.userCookie != null ) {
    console.log('Previously registered');
    res.send('You are already successfully logged in and registered');
  } else {
    res.render('register', { title: "Register here"});
  }
});

router.post('/register', function(req, res, next) {
  	var userDetails = req.body;
    loginService.registerUser(userDetails)
	.then(() => userService.findUserRecord(userDetails.userName))
	.then((result) => {
		console.log(userDetails);
		console.log(result);
		res.render('user-profile', {
			title: "'s Profile",
			heading: "Welcome!",
			user: result
		});
	})
	.catch((err) => {
		res.render('error', { error: err });
	});
});

module.exports = router;
