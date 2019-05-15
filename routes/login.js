var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var loginService = require('./../services/login-service');


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
  try {
    loginService.authenticate(userID);
    console.log("passed it");
    res.cookie('userCookie', userID);
    res.redirect('/chat');
  } catch (e) {
    throw "Incorrect details error"
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
  try {
    loginService.registerUser(userDetails);
    res.render('profile', { title: userDetails.userID + "'s profile!'", heading: "Welcome!"});
  } catch (e) {
    console.log(e);
      //update to respond with error code
    res.send('e');
  };
});

module.exports = router;
