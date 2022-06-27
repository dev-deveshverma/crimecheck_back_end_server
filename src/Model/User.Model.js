const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
  User_id :{type:String , required:true , unique:true} 
},{
  versionKey: false, 
  timestamps: true 
})

module.exports = mongoose.model('user',userSchema);
