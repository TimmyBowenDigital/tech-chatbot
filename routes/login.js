var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' })
});


router.post('/sign-in', function(req, res, next) {
  var userID = req.body.userID;
  res.cookie('userCookie', userID);
  res.redirect('/chat');
});

module.exports = router;
