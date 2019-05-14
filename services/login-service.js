var fs = require('fs');

function authenticate(userName, password) {
  try {
    var authentication_successful = true;
    console.log('Authentication successful');
  } catch (e) {
    console.log('authentication failed');
  } finally {
    return authentication_successful;
  };
};

function logout(req) {

  }

module.exports = {
  authenticate,
  logout
};
