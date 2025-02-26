const express=require("express")
const {Experience, User}=require("../Models/Schema")
const userRouter=express.Router()


userRouter.post("/user",async (req,res)=>{
    try {

        const {name,email,password}=req.body
        if(name && email && password){
            let userdata=new User({name,email,password})
            await userdata.save()

            res.status(200).json({message:"your data have been saved succesfully"})
        }else{
            res.status(400).json({message:"please give name,emai,password correctly"})

        }
        
    } catch (error) {
        console.error(error);

        if(error.name=="ValidationError"){
            res.status(500).json({message:error.message})
        }
    }
})


userRouter.post("/Experience",async (req,res)=>{
    try {
            let userdata=new User(req.body)
            await userdata.save()

            res.status(200).json({message:"your Experience have been saved succesfully"})        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:error.message})
    }
})

module.exports={userRouter}