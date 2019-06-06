var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var chatService = require('./../services/chat-service.js');

router.get('/chat', secured(), function(req, res, next) {
  if (("userCookie" in req.cookies) && req.cookies.userCookie != null ) {
    //console.log("Login Successful");
    res.render('chat', {
      title: 'Chatbot',
      chatMessages: chatService.getAllMessages(),
      userID: req.cookies.userCookie,
	  chats: chatService.getConversations()
      });
  } else {
    res.render('login', { title: 'Login' });
  }
});

router.post('/chat/add', secured(), function(req, res, next) {
  var newMessage = req.body;
  chatService.addMessages(newMessage);
  res.redirect('/chat');
});

module.exports = router;
