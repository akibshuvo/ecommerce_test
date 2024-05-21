const User = require("../model/userModel")
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


let forgetPassword = async (req,res)=>{
    const {email} = req.body

    console.log(email)

    let findEmail = await User.find({email:email})
    
    if(findEmail){
        var token = jwt.sign({ email: email }, 'shhhhh');

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
            subject: "Chage password email", // Subject line
            html: `<a href="http://localhost:5173/changepass/${token}">click for chage password</a>`, 
          });
        console.log(token)
    }
    
    


}

module.exports = forgetPassword