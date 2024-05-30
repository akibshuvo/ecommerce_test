const express = require("express");
const route = express.Router()
const regAuth = require("./authentication/reg.js")
const createproduct = require("./authentication/products.js")


route.use("/auth", regAuth)
route.use("/product", createproduct)

module.exports = route