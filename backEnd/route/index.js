const express = require("express");
const route = express.Router()
const authRoute = require("./api")
const secureApi = require("../midelwar/secureApi")

// const baseApi = process.env.BASEAPIURL

const baseApi = "/api/v1"

route.use(baseApi,authRoute,secureApi)

route.use(baseApi, (req,res)=>res.send("No API FOUND"))

module.exports = route