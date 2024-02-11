const AuthService  = require("../services/auth.service")

class AuthController{
 constructor(){
  this.auth_svc = new AuthService()
 }
 login =(req,res,next)=>{
  try {
   let data =req.body
    result  = this.auth_svc.loginValidate(data)
// todo login logic
res.json({
 result:result,
 msg:'Login Successful', 
 status:true
})
   

  } catch (error) {
   console.log("LoginException",error)
   
  }


 }


 register = (req,res,next)=>{
  let data = req.body
  if(req.file){
    data.image= req.file.path
  }


  try {
   res.json({
    result:{
      user:data,

    },
    status:true,
    msg:"register"
   })
   
  } catch (error) {
   next({
    status:400,
    msg:error
   })
   console.log(error);
   
  }


 }
}

module.exports = AuthController