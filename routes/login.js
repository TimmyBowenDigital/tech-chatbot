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
  var userName = req.body.userName;
  var password = req.body.password;
  console.log(userName);
  //End result will be userID and password passed through to login-service
 	loginService.authenticate(userName, password)
	.then((result) => {
		if (result.userName == userName) {
			if (result.password == password) {
				res.cookie('userCookie', userName);
				res.redirect('/users/' + userName);
			}
			console.log("Incorrect Password: Check your credentials");
	  	} else {
	    	console.log("Username not found");
	  	};
	})
	.catch((err) => {
		res.render('error', { error: err });
	});
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
  	//var userDetails = req.body;
    loginService.registerUser(req.body)
	.then(() => {
		res.redirect('/users/' + req.body.userName);
	})
	.catch((err) => {
		res.render('error', { error: err });
	});
});

module.exports = router;
