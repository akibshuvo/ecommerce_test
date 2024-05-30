const express = require("express");
const route = express.Router()
const regController = require("../../../controller/regController");
const otpVerified = require("../../../helpers/otpVerified")
const forgetPassword = require("../../../controller/forgetPassword")
const changePassController = require("../../../controller/changePassController")
const login = require("../../../controller/login")


route.post("/reg",regController)
route.post("/otpverification",otpVerified)
route.post("/forget",forgetPassword)
route.post("/changepass",changePassController)
route.post("/logins",login)

module.exports = route