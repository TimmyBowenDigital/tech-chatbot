var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	participants: Array,
  	message: String,
	date_sent: {type: Date, default: Date.now},
	date_received: {type: Date}
});


var message = mongoose.model('message', messageSchema);
