var express=require('express');
var app=express();



var port = process.env.PORT || 8085;
app.get('/', function (req, res) {
   res.send('Hello Jafeer!! Welcome to project F');
});
app.listen(port,function(err){
  if(err){
      console.log(err);
  }else{
    console.log("Server running");
  }
});
