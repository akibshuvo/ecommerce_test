const CheckOutsModel = require("../model/checkout")

let checkout = async (req,res)=>{
  const {fullName, email,number,address,zip,amount} = req.body

  let checkoutData = await new CheckOutsModel({
    fullName:fullName,
    email:email,
    number:number,
    amount:amount,
    address:address,
    zip:zip,
  })
  checkoutData.save()

  res.send(checkoutData)
  console.log(checkoutData)
  
 
 
 
 
}

module.exports = checkout