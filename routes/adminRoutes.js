var productController=require('../controller/productController.js');
var User=require("../dao/dbTest.js");

module.exports=function(server){
server.post('/addProduct',productController.addProduct);
}
