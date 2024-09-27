const mongoose = require("mongoose")
const { Schema } = mongoose;


const orderModel = new Schema({
    tran_id:{
        type:String,
        required: true,
        
    },
    cus_name:{
        type:String,
        required: true,

       
    },
    cus_email:{
        type:String,
        required: true,

       
    },
    cus_phone:{
        type:String,
        required: true,

    },

    cus_postcode:{
        type:String,
        require:true,
    },
    cus_add1:{
        type:String,
        require:true, 
    },
    amount:{
        type:String,
        require:true, 
    },

    ownerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    cartId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"CartModel",
    },

    
  });


  module.exports = mongoose.model("Order", orderModel)