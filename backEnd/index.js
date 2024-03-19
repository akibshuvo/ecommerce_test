const express = require("express");
const app = express()
const route = require("./route")

app.use(route)

app.listen(8000,()=>{
    console.log("port connect")
})