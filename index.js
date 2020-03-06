var MongoClient = require("mongodb");

var url = "mongodb://admin:admin1234@ds161894.mlab.com:61894/mongo_tutorial";

MongoClient.connect(url, 
  function(err, db) {
    if(err) throw err;
    
    var dbo = db.db("mongo_tutorial");
    
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created");
    })
    
    console.log("Database created!");
    db.close;
  }
)
