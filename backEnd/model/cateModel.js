const mongoose = require("mongoose")
const { Schema } = mongoose;


const cateSchema = new Schema({
    productname:{
        type:String,
        required: true,
        uniuq: true,
    },
    ownerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    status: {
        type: String,
        enum:["padding","reject","approved"],
        default:"padding"

    }
    
  });


  module.exports = mongoose.model("CateProduct", cateSchema)