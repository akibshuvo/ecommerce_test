const SubProduct = require("../model/subCatagory")


let allSubCata = async (req,res)=>{
 
  let data = await SubProduct.find()
  
  res.send(data)
  
 
 
}

module.exports = allSubCata