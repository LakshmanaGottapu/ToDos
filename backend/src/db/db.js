const mongoose = require("mongoose");

async function mongoConnection(){
    try{
        dbConnection = await mongoose.connect("mongodb://localhost:27017/Hitesh", {useNewUrlParser :true, useUnifiedTopology : true});
        if(dbConnection) {
            console.log("connected to mongodb ");
        }
        else console.log("problem with connecting to the mongodb server");
    }
    catch(err) {console.log(err)} 
};

module.exports = mongoConnection;