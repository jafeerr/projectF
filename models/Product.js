
var mongoose = require('mongoose');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    productName: String,
    category:String,
    price:Number,
    description:String
});

// Mongoose Model definition
var product = mongoose.model('product', ProductSchema);

module.exports=product;
