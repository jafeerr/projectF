var productDao=require('../dao/productDao.js')

exports.addProduct=function(req,res,next)
{
  productDao.addProduct(req.productName,req.category,req.price,req.description,function(status){
    if(status) {
      res.json(true);
    }
    else {
      res.json(false);
    }
  });
  return next();
}
