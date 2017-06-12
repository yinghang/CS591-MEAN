var mongoose = require('mongoose');

// connect to db
var connect = 'mongodb://admin:secret@localhost:27017/cs591';
mongoose.connect(connect);

// check mongo connection
var db_connection = mongoose.connection;
db_connection.once('open', function callback () {
  console.log("DB Connected!");
});

// schema
var stringSchema = mongoose.Schema({
    string: {type: String},
    length: {type: Number}
});

module.exports = {
    Strings: mongoose.model('strings', stringSchema)
};

