
var mongoose = require('mongoose');
var Product=require("../models/Product.js")
// Mongoose connectiono to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://root:root@ds143980.mlab.com:43980/projectf', function (error) {
    if (error) {
        console.log(error);
    }
});
exports.addProduct=function(productName,category,price,description,callback)
{
  var product=new Product({
    productName: productName,
    category:category,
    price:price,
    description:description
  });
  product.save(function(err) {
  if (err)
  {
    log.info("error",err);
    callback(false);
  }
  else {
    {
      console.log('Product added successfully!');
      callback(true);
    }
  }


});
}
