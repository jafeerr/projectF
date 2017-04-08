var express=require('express');
var app=express();
var User=require("./dao/dbTest.js");

//basheer
var port = process.env.PORT || 8085;
app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});
app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
app.listen(port,function(err){
  if(err){
      console.log(err);
  }else{
    console.log("Server running");
  }
});
