const mongoose = require("mongoose")



 const connect = ()=>{
    return mongoose.connect("mongodb+srv://webdeveshverma:devesh@cluster0.fesvj.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;