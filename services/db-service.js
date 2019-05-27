var MongoClient = require('mongodb').MongoClient;


function dbConnection(query) {
	var url = "mongodb://localhost:27017/chatbot";
	return new Promise(function(resolve, reject) {
		MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
			if ( err ) {
				reject(err);
			} else {
				var dbo = db.db("chatbot");

				var res = dbo.collection(query.collection)[query.method](query.options).toArray()
				resolve(res)
			}
		})
	});
	// return MongoClient.connect(url, {useNewUrlParser: true});
}

//Promise function - for querying the data. resolve(db)
function dbQuery(queryObject) {

}

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

function findAllUserRecords() {
	// var db = null;
	var queryOb = {
		collection: "users",
		method: "find",
		options: {}
	}

	return dbConnection(queryOb).then((users) => {
		return Promise.resolve(users);
	})
};

findAllUserRecords();

module.exports = {
  findAllUserRecords: findAllUserRecords,
  findUserRecord: findUserRecord
};
