const express = require("express");
const route = express.Router()
const createproduct = require("../../../controller/createproducts")
const createsubproduct = require("../../../controller/createsubproducts")
const allCatagory = require("../../../controller/allCatagory")
const allSubCata = require("../../../controller/allSubCate")
const addproduct = require("../../../controller/addproduct")
const addVariant = require("../../../controller/addvariant")
const multer  = require('multer');  
const allProducts = require("../../../controller/allProducts");


 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname );
      console.log(file)
    }
  })
  
  const upload = multer({ storage: storage })


route.post("/createproduct",createproduct)
route.post("/createsubproduct",createsubproduct)
route.post("/addproducts",upload.single('avatar'),addproduct)
route.post("/addvariant",upload.single('avatar'), addVariant)



route.get("/allCatagry",allCatagory)
route.get("/allsubcata",allSubCata)
route.get("/allproducts",allProducts)


module.exports = route