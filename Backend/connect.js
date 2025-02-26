const mongoose=require("mongoose")
require("dotenv").config()

const connect=mongoose.connect(process.env.mongodb)
.then(()=>{console.log("mongodb connected succesfully")})
.catch((err)=>{console.error(err)})
module.exports=connect