const mongoose = require("mongoose")
const { Schema } = mongoose;


const addVariantSchema = new Schema({

    variantName:{
        type:String,
        required: true,
        unique: true,
    },
    avatar:{
        type: String,
    },

    regularPrice:{
        type:Number,
        require:true,
    },
    sellPrice:{
        type:Number,
        require:true, 
    },
    productID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddProducts',  
    },
   

    
  });


  module.exports = mongoose.model("AddVariant", addVariantSchema)