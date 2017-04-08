
var mongoose = require('mongoose');
var User=require("../models/User.js")
// Mongoose connectiono to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://root:root@ds143980.mlab.com:43980/projectf', function (error) {
    if (error) {
        console.log(error);
    }
});



module.exports=User;
