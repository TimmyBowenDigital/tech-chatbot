var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let chatMessages = [];

function addMessages(messages) {
  chatMessages.push(messages);
};

function getAllMessages() {
  //console.log(chatMessages);
  return chatMessages;
};

module.exports = {
  addMessages,
  getAllMessages
};
