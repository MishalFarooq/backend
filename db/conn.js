const mongoose = require("mongoose");

const DB = "mongodb+srv://Mishal:R3XQToIiionqyR6b@cluster0.faczc5f.mongodb.net/Authuser?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connect")).catch((error)=>{
    console.log(error);
})