const mongoose = require("mongoose")
const { Schema } = mongoose;


const cartSchema = new Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "AddProducts"
    },

    quantity:{
        type: Number,
        required: true,

    },

    ownerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    
    
  });


  module.exports = mongoose.model("CartModel", cartSchema)