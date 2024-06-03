const express = require("express");
const route = express.Router()
const createproduct = require("../../../controller/createproducts")
const createsubproduct = require("../../../controller/createsubproducts")
const allCatagory = require("../../../controller/allCatagory")
const allSubCata = require("../../../controller/allSubCate")


route.post("/createproduct",createproduct)
route.post("/createsubproduct",createsubproduct)



route.get("/allCatagry",allCatagory)
route.get("/allsubcata",allSubCata)


module.exports = route