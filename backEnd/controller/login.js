const User = require("../model/userModel")
const bcrypt = require('bcrypt');

let login = async (req,res)=>{
  const {email, password} = req.body
 
  let logingData =await User.find({email:email})
  console.log(logingData,"logindata")

  if(logingData.length > 0){
      bcrypt.compare(password, logingData[0].password, function(err, result) {
    console.log(result,"rrr")

    if(result){
        res.send({
            email: logingData[0].email,
            name: logingData[0].name,
            role: logingData[0].role,
            isEmailVerified: logingData[0].isEmailVerified,
            ownerId: logingData[0].id,
        })
        console.log("login done")
        
    }else{
        res.send("password wrong")
        console.log("password vul")
    }

});
    
  }else{
    res.send("email wrong")
    console.log("email wrong")
    
  }

//   bcrypt.compare(password, logingData.password, function(err, result) {
//     console.log(result)

//     if(result){
//         res.send({success:"login done"})
//     }else{
//         res.send({error:"something wrongs"})
//     }

// });

}

module.exports = login