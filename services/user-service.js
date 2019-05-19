var fs = require('fs');

var rawUserList = require('./../mock/users.json');


//Create users
function createUser(user) {
    //var userList = JSON.stringify(rawUserList);
    //var user = JSON.stringify(user);
    //userList += user;
  //  console.log(userList);
    console.log('User has been added');
    //res.redirect('/users')
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
  console.log(rawUserList);
  return rawUserList;
};

module.exports = {
  createUser,
  getUsers,
  delUser,
  editUser
};
