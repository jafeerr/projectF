var express=require('express');
var server=express();
var User=require("./dao/dbTest.js");
var routes=require('./routes/.');
var port = process.env.PORT || 8085;

routes(server);
server.listen(port,function(err){
  if(err){
      console.log(err);
  }else{
    console.log("Server running");
  }
});
