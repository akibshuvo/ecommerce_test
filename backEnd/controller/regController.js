const blankInput = require("../helpers/blankInput")
const emailValid = require("../helpers/emailValid")
const passwordLength = require("../helpers/passwordLengh")
const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

let regController = async (req,res)=>{

   const {name, email, password} = req.body

   if(blankInput(name)){
      res.send({nameError: "Please enter your name"})

   }else if(blankInput(email)){
      res.send({emailError: "Please enter your email"})

   }else if(!emailValid(email)){
      res.send({email:"invalid email"})

   }else if(blankInput(password)){
      res.send({passwordError: "Please enter your password"})
   
   }else if(passwordLength(password)){
      res.send({passwordShort: "password is short"})
   }
   else{
      let exitingEmail = await User.find({email:email})
      console.log(exitingEmail)

      if(exitingEmail.length > 0){
      res.send({emailError:`${email} already exist`})
      
      }else{
         const otp = otpGenerator.generate(6, { 
            lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false 
               });
   
            console.log(otp)

         const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            auth: {
              user: "resmiakther73@gmail.com",
              pass: "gaxw rlrr ltdh oasw",
            },
          });

          const info = await transporter.sendMail({
            from: "resmiakther73@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Email Verified Code ✔", // Subject line
            html: `<b>Use this OTP ${otp}</b>`, // html body
          });


         bcrypt.hash(password, 10, function(err, hash) {
          let user = new User({
            name:name,
            email:email,
            password:hash,
            otp:otp
         })
         user.save()
         
         res.send({
            name:user.name,
            email:user.email,
            role:user.role,
            password:user.password
         })
        });
      }
   }
   
}

module.exports = regController