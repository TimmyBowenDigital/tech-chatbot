var fs = require('fs');

var userList = require('./db-service.js');

//Create users
function createUser(user) {
    //var userList = JSON.stringify(rawUserList);
    //var user = JSON.stringify(user);
    //userList += user;
  // console.log(userList);
    console.log('User has been added');
    // res.redirect('/users')
  };
  //console.log(user);

//Delete users
function delUser(user){
  console.log('user has been deleted');
};

//Edit users
function editUser(user){
  console.log('user has been edited');
};


//Get users
function getUsers(){
    console.log(userList.findAllUserRecords());
    return userList.findAllUserRecords();

  // var promise = new Promise(function(resolve, reject) {
  //   var users = userList.findAllUserRecords();
  //   console.log(users);
  //   if (users) {
  //     resolve("stuff worked");
  //   } else {
  //     reject(Error("It broke"));
  //   }
  // });
  //
  // promise.then(function(result) {
  //   console.log(result);
  //   return result;
  // }, function(err){
  //   return err;
  // });
};

module.exports = {
  createUser,
  getUsers,
  delUser,
  editUser
};
