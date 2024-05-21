const User = require("../model/userModel")
const bcrypt = require('bcrypt');

let login = async (req,res)=>{
  const {email, password} = req.body

  let logingData =await User.findOne({email:email})

  bcrypt.compare(password, logingData.password, function(err, result) {
    console.log(result)

    if(result){
        res.send({success:"login done"})
    }else{
        res.send({error:"something wrongs"})
    }

});

}

module.exports = login