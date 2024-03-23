const blankInput = require("../helpers/blankInput")
const emailValid = require("../helpers/emailValid")
const passwordLength = require("../helpers/passwordLengh")
const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

let otpVerified = async (req,res)=>{
   const {email, otp} = req.body
    let findEmail = await User.findOne({email:email})
    
    if(findEmail){
        console.log(findEmail.otp)
        console.log(otp)
        if(!findEmail.isEmailVerified && findEmail.otp == otp){
            await User.findOneAndUpdate({email:email}, {otp:"", isEmailVerified:true})
            console.log("mile gese")
            res.send({success: "done"})
        }else{
            console.log("mile nai")
            res.send({Error: "don't match OTP"})
        }
    }
      }
  
module.exports = otpVerified