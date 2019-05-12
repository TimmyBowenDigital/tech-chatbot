var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let chatMessages = [];

router.get('/', function(req, res, next) {
  try {
    var userID = req.cookies['userCookie'].userID;
    console.log("UserID cookie Set to: " + userID);
  } catch (e) {
    res.redirect('/login');
  } finally {
    res.render('chat', {
      title: 'Chatbot',
      chatMessages: chatMessages,
      userID: userID
      });
  }
});

router.post('/add', function(req, res, next) {
  var newMessage = req.body;
  //var userID = req.body.userID;
  //console.log(userID);
  chatMessages.push(newMessage);
  console.log(newMessage);
  res.redirect('/chat');
});

module.exports = router;
