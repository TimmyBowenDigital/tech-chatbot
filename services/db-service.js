var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  message: String,
  userID: String,
  date: {type: Date, default: Date.now},
  conversationID: Number
});

var userSchema = new Schema({
  userID: String,
  password: String,
  firstName: String,
  lastName: String,
  dob: Date,
  meta: {
    interests: Array,
    Strengths: Array
  }
});

var message = mongoose.model('message', messageSchema);
var user = mongoose.model('user', userSchema);
