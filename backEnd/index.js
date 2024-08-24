const express = require("express");
const app = express()
const route = require("./route")
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(route)

app.listen(8000,()=>{
    console.log("port connect")
})