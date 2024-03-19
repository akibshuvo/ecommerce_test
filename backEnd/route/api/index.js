const express = require("express");
const route = express.Router()
const regAuth = require("./authentication/reg.js")


route.use("/auth", regAuth)

module.exports = route