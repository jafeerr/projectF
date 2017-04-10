
var mongoose = require('mongoose');
// Mongoose connectiono to MongoDB (ted/ted is readonly)

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String
});

// Mongoose Model definition
var User = mongoose.model('user', UserSchema);

module.exports=User;
