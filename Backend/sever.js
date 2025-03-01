const {app}=require("./app")

const connect=require("./connect")

require("dotenv").config()


const port=process.env.PORT




app.listen(port ,async ()=>{
    try {


        await connect

        console.log(`app is running on http://localhost:${port}`)
        
    } catch (error) {
        console.error(error)
    }
})