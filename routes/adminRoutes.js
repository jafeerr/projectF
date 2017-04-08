var productController=require('../controller/productController.js');
var User=require("../dao/dbTest.js");
module.exports=function(server){

//enter route here

//testing
server.get('/users', function (req, res) {
  console.log("entering user method");
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});
}
