const mongoose = require("mongoose")
const { Schema } = mongoose;


const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    otp:{
        type:String
    },

    isEmailVerified:{
        type: Boolean,
        default:false
    },

    role:{
        type: String,
        enum: ["user","marchen","admin"],
        default:"user"
    }
  });


  module.exports = mongoose.model("User", userSchema)