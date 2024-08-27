const SubcateProduct = require("../model/subCatagory")
const Catagory = require('../model/cateModel')


let createsubproduct = async (req,res)=>{
  const {productname, ownerId, cateId} = req.body
  
  let data = await SubcateProduct.findOne({productname:productname})
  console.log(data,"sss")

  if(data){
    res.send({error:"this sub product already have"})
  }else{
    let newData = new SubcateProduct({
      productname:productname,
      ownerId:ownerId,
      cateId:cateId,
      
    })
    newData.save()
    res.send(newData)

    await Catagory.findOneAndUpdate({_id:cateId}, {$push:{subcatelist: newData._id}})
  }
 
 
}

module.exports = createsubproduct