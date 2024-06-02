const SubcateProduct = require("../model/subCatagory")


let createsubproduct = async (req,res)=>{
  const {productname, ownerid, cateId} = req.body
  
  let data = await SubcateProduct.findOne({productname:productname})
  console.log(data,"sss")

  if(data){
    res.send({error:"this sub product already have"})
  }else{
    let newData = new SubcateProduct({
      productname:productname,
      ownerid:ownerid,
      cateId:cateId
    })
    newData.save()
    console.log(newData)
    res.send(newData)
  }
 
 
}

module.exports = createsubproduct