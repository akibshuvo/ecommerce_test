const mongoose = require("mongoose")
const { Schema } = mongoose;


const addProSchema = new Schema({
    productName:{
        type:String,
        // required: true,
        unique: true,
    },
    descriptions:{
        type:String,
       
    },
    avatar:{
        type: [String],
    },

    regularPrice:{
        type:Number,
        // require:true,
    },
    sellPrice:{
        type:Number,
        // require:true, 
    },
    slug:{
        type:String,
        
    }

    // status: {
    //     type: String,
    //     enum:["padding","reject","approved"],
    //     default:"padding"

    // }
    
  });


  module.exports = mongoose.model("AddProducts", addProSchema)