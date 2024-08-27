const SubProduct = require("../model/subCatagory")


let singlecatagory = async (req,res)=>{
 console.log(req,"aaa")
  let data = await SubProduct.find({cateId:req.query.slug}).populate('ownerId') 
  
  res.send(data) 
  
 
 
}

module.exports = singlecatagory