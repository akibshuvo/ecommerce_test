const SubcateProduct = require("../model/cateModel")


let allCatagory = async (req,res)=>{
 
  let data = await SubcateProduct.find().populate("subcatelist").populate("ownerid")
  
  res.send(data)



}

module.exports = allCatagory