var fs = require('fs');
const _ = require("lodash");

var userList = require('./../mock/users.json');

function authenticate(userID, password) {
  var auth_outcome = null;
  if ( _.find(userList, { "userID": userID }) ) {
    console.log("found em");
    return auth_outcome = true;
  } else {
    return auth_outcome = false;
    console.log("Error User Not found");
  };
};

function logout(req) {

};

function registerUser(userDetails) {
  //change to db.findOne when checking if unique value?
  //intermediate solutuion being that we check a JSON string
  if ( _.find(userList, { "userID": userDetails.userID }) ) {
    throw "User already exists";
  } else {
    userList.push(userDetails);
    return "success";
  };
};

module.exports = {
  authenticate,
  logout,
  registerUser
};
