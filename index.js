var MongoClient = require("mongodb");

var url = "mongodb://test:testpwd1@ds161894.mlab.com:61894/mongo_tutorial";

MongoClient.connect(url, 
  function(err, db) {
    if(err) throw err;
    console.log("Database created!");
    db.close;
  }
)
