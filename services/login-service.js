var fs = require('fs');
const _ = require("lodash");

var dbService = require('./db-service.js');
var userService = require('./user-service');

function authenticate(userID, password) {
	var auth_outcome = null;
	// if ( _.find(userArray, { "userID": userID }) ) {
	// 	console.log("found em");
	// 	return auth_outcome = true;
	// } else {
	// 	return auth_outcome = false;
	// 	console.log("Error User Not found");
	// 	};
};

function logout(req) {

};

//registerUser but duplication can be found in user-service with createUser
function registerUser(userDetails) {
  //change to db.findOne when checking if unique value?
  //intermediate solutuion being that we check a JSON string
	var queryOb = {
		collection: "users",
		method: "insertOne",
		options: { $eq: userDetails },
		db: "chatbot"
	}
	//console.log(queryOb);

	return dbService.dbQuery(queryOb).then((result) => {
		return Promise.resolve(result);
	})

  // if ( _.find(userList, { "userID": userDetails.userID }) ) {
  //   throw "User already exists";
  // } else {
  //   userList.push(userDetails);
  //   return "success";
  // };
};

module.exports = {
  authenticate: authenticate,
  logout: logout,
  registerUser: registerUser
};
