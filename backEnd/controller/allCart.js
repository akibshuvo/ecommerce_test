const CartDetails = require("../model/cartModel")


let allCart = async (req,res)=>{
 
  let data = await CartDetails.find().populate('productID')
  
  res.send(data)



}

module.exports = allCart