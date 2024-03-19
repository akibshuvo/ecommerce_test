require('dotenv').config()
const express = require("express");
var cors = require('cors')
const route = express.Router()
const regController = require("../../../controller/regController");
const secureApi = require("../../../midelwar/secureApi");
const mongooseConfig = require("../../../config/mongooseConfig")


route.use(express.json())
route.use(cors())
mongooseConfig()


route.post("/reg",regController)

module.exports = route