const express = require("express");
const route = express.Router()
const createproduct = require("../../../controller/createproducts")


route.post("/createproduct",createproduct)


module.exports = route