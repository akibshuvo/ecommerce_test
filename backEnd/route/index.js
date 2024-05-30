require('dotenv').config()
const express = require("express");
var cors = require('cors')
const route = express.Router()
const authRoute = require("./api")
const secureApi = require("../midelwar/secureApi")
const mongooseConfig = require("../config/mongooseConfig")

// const baseApi = process.env.BASEAPIURL
mongooseConfig()
route.use(cors())
route.use(express.json())


const baseApi = "/api/v1"

route.use(baseApi,authRoute,secureApi)

route.use(baseApi, (req,res)=>res.send("No API FOUND"))

module.exports = route