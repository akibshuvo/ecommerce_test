const mongoose = require("mongoose")
const { Schema } = mongoose;


const subcateSchema = new Schema({
    productname:{
        type:String,
        required: true,
        uniuq: true,
    },
    ownerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    cateId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"CateProduct",
    },

    status: {
        type: String,
        enum:["padding","reject","approved"],
        default:"padding"

    }
    
  });


  module.exports = mongoose.model("SubcateProduct", subcateSchema)