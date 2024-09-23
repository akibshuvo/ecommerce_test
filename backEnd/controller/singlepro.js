const AllPro = require("../model/adProductModel")


let singlepro = async (req,res)=>{
    let slug = req.params.slug

    console.log(slug,"nnnnn")
 
  let data = await AllPro.find({slug:slug}) 
  
  res.send(data)

  
 
 
}

module.exports = singlepro   