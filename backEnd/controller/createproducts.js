const CateProduct = require("../model/cateModel")

let createproduct = async (req,res)=>{
  const {productname, ownerId} = req.body
  
  let data = await CateProduct.findOne({productname:productname})

  if(data){
    res.send({error:"this product already have"})
  }else{
    let newData = new CateProduct({
      productname:productname,
      ownerid:ownerId
    })
    newData.save()
    console.log(newData)
    res.send(newData)
  }
 
 
}

module.exports = createproduct