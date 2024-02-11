const loginCheck = (req,res,next)=>{
 let isLoginin = true
 if(isLoginin){
  next()
 }else{
next({
 status:401,
 msg:"Unauthorized"
})


 }
}

module.exports = loginCheck 