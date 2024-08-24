const allPro = require("../model/adProductModel")


let allProducts = async (req,res)=>{
 
  let data = await allPro.find()
  
  res.send(data)
  console.log(data)
  
 
 
}

module.exports = allProducts