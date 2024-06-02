const express = require("express");
const route = express.Router()
const createproduct = require("../../../controller/createproducts")
const createsubproduct = require("../../../controller/createsubproducts")
const allCatagory = require("../../../controller/allCatagory")


route.post("/createproduct",createproduct)
route.post("/createsubproduct",createsubproduct)


route.get("/allCatagry",allCatagory)


module.exports = route