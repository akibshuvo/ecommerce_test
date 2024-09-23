const express = require("express");
const route = express.Router()
const createproduct = require("../../../controller/createproducts")
const createsubproduct = require("../../../controller/createsubproducts")
const allCatagory = require("../../../controller/allCatagory")
const allSubCata = require("../../../controller/allSubCate")
const singlecatagory = require("../../../controller/singlecatagory")
const addproduct = require("../../../controller/addproduct")
const addVariant = require("../../../controller/addvariant")
const multer  = require('multer');  
const allProducts = require("../../../controller/allProducts");
const singlepro = require("../../../controller/singlepro");
const cartPage = require("../../../controller/cartPageController");
const allCart = require("../../../controller/allCart");
const checkout = require("../../../controller/checkout");


 
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
route.post("/cartPage",cartPage)
route.post("/checkout",checkout)
route.post("/addproducts",upload.array('avatar', 12),addproduct)
route.post("/addvariant",upload.single('avatar'), addVariant)



route.get("/allCatagry",allCatagory)
route.get("/allsubcata",allSubCata)
route.get("/allproducts",allProducts)
route.get("/allCart",allCart)
route.get("/singlecatagory",singlecatagory)
route.get("/singlepros/:slug",singlepro)


module.exports = route