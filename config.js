var mongo = require("mongoose");  
var db =   
mongo.connect("mongodb://Kiruba:Kalpana123@ds227939.mlab.com:27939/roadsafety", function(err, response){  
   if(err){ console.log('Failed to connect to ' + db); }  
   else{ console.log('Connected to  Database ')}
});  
  
  
module.exports =db;  