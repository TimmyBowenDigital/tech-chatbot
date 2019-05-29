var fs = require('fs');

var dbService = require('./db-service.js');

//Create users
function createUser(user) {
  //get userDetails from req.body.// XXX
  //call createUser() by passing all details
  //expect success flag
	var queryOb = {
		collection: "users",
		db: "chatbot",
		method: "insert",
		options: { $eq: user },
		db: "chatbot"
	}

	return dbService.dbQuery(queryOb).then((users) => {
		return Promise.resolve(users);
	})
};
  //console.log(user);

//Delete users
function delUser(user){
	console.log(user);
  //get userID or ID from req.body.// XXX
  //call deleteUser() by passing in id
  //expect success flag
  var queryOb = {
	  collection: "users",
	  method: "deleteOne",
	  options: { userName: {$eq: user} },
	  db: "chatbot"
  }
  //console.log(queryOb);

  return dbService.dbQuery(queryOb).then((result) => {
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
	  options: { $eq: user.userName },
	  db: "chatbot"
  }
  //console.log(queryOb);

  return dbService.dbQuery(queryOb).then((result) => {
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
		options: {},
		db: "chatbot"
	}

	return dbService.dbQuery(queryOb).then((users) => {
		return Promise.resolve(users);
	})
};

//find individual user
function findUserRecord(userName) {
	var queryOb = {
		collection: "users",
		method: "findOne",
		options: { userName: { "$eq": userName } },
		db: "chatbot"
	}

	return dbService.dbQuery(queryOb).then((user) => {
  	  return Promise.resolve(user);
    })
};



module.exports = {
  findUserRecord: findUserRecord,
  getUsers: getUsers,
  delUser: delUser,
  editUser: editUser
};
