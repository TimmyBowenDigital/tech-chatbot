var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function findUserRecord(userRecord) {
  console.log(url);
  MongoClient.connect(url, {native_parser: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("chatbot");
    dbo.collection("users").findOne({ userName: userRecord }, function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
};

// function findAllUserRecords() {
//   console.log(url);
//   MongoClient.connect(url, {native_parser: true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("chatbot");
//     dbo.collection("users").find({}, function(err, result) {
//       //if (err) throw err;
//       console.log(result['userName']);
//       db.close();
//     });
//   });
// };

function findAllUserRecords() {
  MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("chatbot");
    dbo.collection("users").find({}).toArray().then((result) => {
      //console.log(result);
      return result;
      db.close();
    });
  });
};

findAllUserRecords();

module.exports = {
  findAllUserRecords: findAllUserRecords,
  findUserRecord: findUserRecord
};
