let passwordLength = (value)=>{
  if(value.length < 6){
    return true;
  }else{
    return false;
  }
}

module.exports = passwordLength