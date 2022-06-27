const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const connect = require("./db")
const userController = require("./Controllers/User.Controller")
const feedController = require("./Controllers/Feed.Controller")

app.use("/user",userController)
app.use("/notice",feedController)




app.listen(  process.env.PORT || 8085, async()=>{
    try {
     await connect()
    console.log("server in running " , `${8085}`)   
    } catch (error) {
      console.log(error)  
    }
});
    