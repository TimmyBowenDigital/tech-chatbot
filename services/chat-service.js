var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const _ = require("lodash");

let chatMessages = [];

let chats = [
	{ userID: "TimmyTheTrumpet" },
	{ userID: "Timmy" },
	{ userID: "TimmyTurner" },
	{ userID: "TimmyTumper" },
	{ userID: "TimmyThumper" },
	{ userID: "Timmyhoodlem" }
];

function addMessages(messages) {
  chatMessages.push(messages);
};

function getAllMessages() {
  //console.log(chatMessages);
  return chatMessages;
};

function getConversations() {
	return chats;
};

module.exports = {
  addMessages: addMessages,
  getAllMessages: getAllMessages,
  getConversations: getConversations
};
