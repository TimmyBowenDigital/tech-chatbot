var fs = require('fs');

var userList = require('./db-service.js');

//Create users
function createUser(user) {
  //get userDetails from req.body.// XXX
  //call createUser() by passing all details
  //expect success flag
  console.log('User has been added');
  // res.redirect('/users')
};
  //console.log(user);

//Delete users
function delUser(user){
  //get userID or ID from req.body.// XXX
  //call deleteUser() by passing in id
  //expect success flag
  console.log('user has been deleted');
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
  //Get User List from Db-Service.js (Promise)
  // var userPromise = userList.findAllUserRecords()
  // .then(function(result) {
  //   console.log( typeof result);
  //   return result; //Need to determing getting data to Front END!
  // }).catch(function(err) {
  //   console.log("failed" + err);
  // });



	

};



module.exports = {
  createUser,
  getUsers,
  delUser,
  editUser
};
