const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    Url:{
        type:String,
        required:true,
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})
const User = mongoose.model("User",UserSchema)
module.exports=User