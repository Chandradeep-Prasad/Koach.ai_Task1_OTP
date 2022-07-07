function verify(){
   var phone = document.getElementById("mob").value;

  if(check(phone)){
    otp.disabled = false
  }else{
    alert ("Please enter a 10 digit mobile number")
  }
}

function check(phone){
  if(phone.length == 10){
    return true
  }else{
    return false
  }
}

