const mongoose = require("mongoose");


const NoticeSchema = new mongoose.Schema({
    User_id :{type:mongoose.Schema.Types.ObjectId, ref: 'user'  ,required:true},
    Notice :{type:String , required:true}
},
{
    versionKey: false, 
    timestamps: true 
  })

module.exports  = mongoose.model("notice",NoticeSchema);