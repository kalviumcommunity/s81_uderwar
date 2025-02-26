const express=require("express")
const { connect } = require("./connect")
const app=express()


app.use(express.json())


const {userRouter}=require("./controllers/userRoutes")


app.get("/test",async(req,res)=>{
    res.send("Helloooooo..................000000")
})


app.use("/user",userRouter)


module.exports={app}