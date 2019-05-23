var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('chatbot');
  var myObj = [
    { userName: "TimmyTrumpet", password: "", firstName: "Timmy", lastName: "Trumpet", dob: "2001-10-1", meta: { interests: [], strengths: []} },
    { userName: "JJFranchize", password: "", firstName: "Jim Jim", lastName: "JJ", dob: "1994-05-10", meta: { interests: [], strengths: []} },
    { userName: "Jane", password: "", firstName: "Jane", lastName: "Bob", dob: "2010-10-30", meta: { interests: [], strengths: []} },
    { userName: "Tom", password: "", firstName: "Tom", lastName: "Teller", dob: "1990-04-10", meta: { interests: [], strengths: []} },
    { userName: "Jill", password: "", firstName: "Jill", lastName: "Jane", dob: "1994-12-10", meta: { interests: [], strengths: []} },
    { userName: "joe", password: "", firstName: "Joe", lastName: "Teller", dob: "", meta: { interests: [], strengths: []} }
  ];
  dbo.collection("users").insertMany(myObj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
