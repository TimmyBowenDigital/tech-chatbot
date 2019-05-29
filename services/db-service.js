var MongoClient = require('mongodb').MongoClient;

function dbQuery(query) {
	return new Promise(function(resolve, reject) {
		var url = "mongodb://localhost:27017/chatbot";
		MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
			if ( err ) {
				reject(err);
			}
			var dbo = db.db("chatbot");
		if (query.method == "findOne") {
			// console.log(query.options);
			var res = dbo.collection(query.collection)[query.method](query.options)
			resolve(res)
		} else if (query.method == "insertOne" || query.method == "insertMany" ) {
			var res = dbo.collection(query.collection)[query.method](query.options, function(err, res) {
				if (err) throw err;
				console.log("Number of documents inserted: " + res.insertedCount);
			})
			resolve(res);
		} else if ( query.method == "deleteOne" ) {
			var res = dbo.collection(query.collection)[query.method](query.options);
			console.log("user deleted");
			resolve(res)
		} else {
			var res = dbo.collection(query.collection)[query.method](query.options).toArray()
			resolve(res)
		}
	});
})
};

module.exports = {
  dbQuery: dbQuery
};
