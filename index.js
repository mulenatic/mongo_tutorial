var MongoClient = require("mongodb");

var url = "mongodb://admin:admin1234@ds161894.mlab.com:61894/mongo_tutorial";

MongoClient.connect(url, 
  function(err, db) {
    if(err) throw err;
    
    var dbo = db.db("mongo_tutorial");
       
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      
      console.log(result);
    })
    
    db.close;
  }
)
