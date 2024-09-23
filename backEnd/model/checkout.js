const mongoose = require("mongoose")
const { Schema } = mongoose;


const checkoutModel = new Schema({
    fullName:{
        type:String,
        // required: true,
        unique: true,
    },
    email:{
        type:String,
       
    },
    number:{
        type:Number,
    },

    zip:{
        type:Number,
        // require:true,
    },
    address:{
        type:String,
        // require:true, 
    },
    
    amount:{
        type:String,
        // require:true, 
    },
    

    
    
  });


  module.exports = mongoose.model("Checkout", checkoutModel)