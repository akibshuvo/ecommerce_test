require('dotenv').config()
const express = require("express");
var cors = require('cors')
const route = express.Router()
const regController = require("../../../controller/regController");
const secureApi = require("../../../midelwar/secureApi");
const mongooseConfig = require("../../../config/mongooseConfig")
const otpVerified = require("../../../helpers/otpVerified")
const forgetPassword = require("../../../controller/forgetPassword")
const changePassController = require("../../../controller/changePassController")
const login = require("../../../controller/login")


route.use(express.json())
route.use(cors())
mongooseConfig()


route.post("/reg",regController)
route.post("/otpverification",otpVerified)
route.post("/forget",forgetPassword)
route.post("/changepass",changePassController)
route.post("/login",login)

module.exports = route