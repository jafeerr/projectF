var adminRoutes=require('../routes/adminRoutes.js');
module.exports=function(server)
{
  adminRoutes(server);
  //Method for root path
  server.get('/', function(req, res) {
          res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
      });
}
