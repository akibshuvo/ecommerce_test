const CartProduct = require("../model/cartModel")

let createproduct = async (req,res)=>{
  const {productID, quantity,ownerid} = req.body
  
  let data = await CartProduct.find({productID:productID})

  if(data.length > 0){
   if(req.query.type == 'incre'){
    let quantityUpdate = await CartProduct.findOneAndUpdate({_id:data[0]._id}, {quantity: data[0].quantity+1}, {new: true})
   }else if(req.query.type == 'decre'){
    let quantityUpdate = await CartProduct.findOneAndUpdate({_id:data[0]._id}, {quantity: data[0].quantity-1}, {new: true})

   }

    //  return res.send(quantityUpdate)

  }else{
   let addCart = new CartProduct({
        productID: productID,
        quantity : 1,
        ownerid: ownerid,
   })

   addCart.save()
   return res.send("add hoiche")
  }

 
 
}

module.exports = createproduct