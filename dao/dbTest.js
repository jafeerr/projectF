
var mongoose = require('mongoose');
// Mongoose connectiono to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://root:root@ds143980.mlab.com:43980/projectf', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String
});

// Mongoose Model definition
var User = mongoose.model('user', UserSchema);


module.exports=User;
