const AddProducts = require("../model/adProductModel")


let  addproduct = async (req,res)=>{
  const {productName, descriptions, avatar,regularPrice,sellPrice,slug} = req.body

  console.log(`/uploads/${req.file.filename}`)
  
  let data = await AddProducts.findOne({productName:productName})
  console.log(data,"sss")

  if(data){
    res.send({error:"this sub product already have"})
  }else{
    let newData = new AddProducts({
      productName:productName,
      descriptions:descriptions,
      // ownerId:ownerId,
      avatar:`/uploads/${req.file.filename}`,
      regularPrice:regularPrice,
      sellPrice:sellPrice,
      slug:slug
      
    })
    newData.save()
    console.log(newData)
    res.send(newData)
  }
 
 
}

module.exports = addproduct