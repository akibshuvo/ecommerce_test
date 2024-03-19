const secureApi = (req,res,next)=>{
  console.log(req.headers)

  if(req.headers.authorization == process.env.SECUREAPI){
    next()
  }
  else{
    res.send({apiError: "Api Not Found"})
  }
}

module.exports = secureApi