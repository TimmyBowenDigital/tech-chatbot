var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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
  res.cookie('userCookie', userID);
  res.redirect('/chat');
});

module.exports = router;
