class AuthService{
 loginValidate =(data)=>{
  let error={}
  if(!data.email){
   error['email']="Email is required"
  }else{
   delete error['email']
  }
  if(!data.password){
   error['password']="password is required"
  }else{
   delete error['password']
  }
    if(Object.keys(error).length){
     console.log(error);
   throw error
  }else{
   return data
  }

 }
 registerValidate=(data)=>{
let err_msg= {}
if(!data.name){
  err_msg['name']="Name is required"
}
if(!data.email){
  err_msg['email']="Email is required"
}

if(!data.password){
  err_msg['password']="Password is required"
}

if(!data.role){
  err_msg['role']="Role is required"
}
if(Object.keys(err_msg).length){
  return err_msg
}else{
  return null
}
 }
 
}

module.exports = AuthService 