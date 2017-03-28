var express=require('express');
var app=express();
var User=require("./dao/dbTest.js");


var port = process.env.PORT || 8085;
app.get('/', function (req, res) {
   res.send('Hello Jafeer!! Welcome to project F');
});
app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});
app.listen(port,function(err){
  if(err){
      console.log(err);
  }else{
    console.log("Server running");
  }
});
