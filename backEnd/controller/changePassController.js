const User = require("../model/userModel")
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

let changePassController =async (req,res)=>{
  console.log("akib")
  const {password, token} = req.body

  var decoded = jwt.verify(token, 'shhhhh');

  bcrypt.hash(password, 10,async function(err, hash) {
  await User.findOneAndUpdate({email:decoded.email},{password:hash})
    
  res.send({success:"successFully Change"})
   })
   
  
}

module.exports = changePassController