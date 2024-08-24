const addVariant = require("../model/addVariantModel")


let  addvariant = async (req,res)=>{

  const {variantName,avatar,regularPrice,sellPrice,productID } = req.body

  console.log(`/uploads/${req.file.filename}`)
  
  let data = await addVariant.findOne({variantName:variantName})
  console.log(data,"sss")

  if(data){
    res.send({error:"this sub product already have"})
  }else{
    let newData = new addVariant({
      variantName:variantName,
      avatar:`/uploads/${req.file.filename}`,
      regularPrice: regularPrice,
      sellPrice: sellPrice,
      productID:productID
  
      
    })
    newData.save()
    console.log(newData)
    res.send(newData)
  }
 
 
}

module.exports = addvariant