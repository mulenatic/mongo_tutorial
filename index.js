var MongoClient = require("mongodb");

var url = "mongodb://admin:admin1234@ds161894.mlab.com:61894/mongo_tutorial";

MongoClient.connect(url, 
  function(err, db) {
    if(err) throw err;
    
    var dbo = db.db("mongo_tutorial");
    
    var myObj = { 
      name: "Company Inc", address: "Highway 37"
    };
    
    dbo.collection("customers").insertOne(myObj, function(err, res) {
      if (err) throw err;
      
      console.log("1 document inserted");
    })
    
    db.close;
  }
)
