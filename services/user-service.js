var fs = require('fs');

var dbService = require('./db-service.js');

//Create users
function createUser(user) {
  //get userDetails from req.body.// XXX
  //call createUser() by passing all details
  //expect success flag
	var queryOb = {
		collection: "users",
		method: "insert",
		options: { user }
	}

	return dbService.dbConnection(queryOb).then((users) => {
		return Promise.resolve(users);
	})
};
  //console.log(user);

//Delete users
function delUser(user){
  //get userID or ID from req.body.// XXX
  //call deleteUser() by passing in id
  //expect success flag
  var queryOb = {
	  collection: "users",
	  method: "deleteOne",
	  options: { user }
  }
  //console.log(queryOb);

  return dbService.dbConnection(queryOb).then((result) => {
	  return Promise.resolve(result);
  })
};

//Delete many user
function delManyUser(user){
  //get userID or ID from req.body.// XXX
  //call deleteUser() by passing in id
  //expect success flag
  var queryOb = {
	  collection: "users",
	  method: "deleteMany",
	  options: { userName: { $eq: "" }  }
  }
  //console.log(queryOb);

  return dbService.dbConnection(queryOb).then((result) => {
	  return Promise.resolve(result);
  })
};


//Edit users
function editUser(user){
  //get userID or ID from req.body.// XXX
  //call updateUser() by passing in id and fields to be updated
  //expect success flag
  console.log('user has been edited');
};


//Get users
function getUsers(){
	// var db = null;
	var queryOb = {
		collection: "users",
		method: "find",
		options: {}
	}

	return dbService.dbConnection(queryOb).then((users) => {
		return Promise.resolve(users);
	})
};

//find individual user
function findUserRecord(userName) {
	var queryOb = {
		collection: "users",
		method: "findOne",
		options: { userName: {$eq: userName} }
	}

	return dbService.dbConnection(queryOb).then((user) => {
  	  return Promise.resolve(user);
    })
};



module.exports = {
  findUserRecord: findUserRecord,
  getUsers: getUsers,
  delUser: delUser,
  editUser: editUser
};
