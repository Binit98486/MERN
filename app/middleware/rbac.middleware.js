 const isAdmin =(req,res,next)=>{
  let role  = "Admin"
  if(role==="Admin"){
   next()

  }else{
   next({
    status:403,
    msg:"Unauthorized"
   })

  }
 }

 const isSeller =(req,res,next)=>{
  let role  = "Seller"
  if(role==="Seller"){
   next()

  }else{
   next({
    status:403,
    msg:"Unauthorized"
   })

  }
 }

 const isCustomer =(req,res,next)=>{
  let role  = "Customer"
  if(role==="Customer"){
   next()

  }else{
   next({
    status:403,
    msg:"Unauthorized"
   })

  }
 }

 module.exports = {isAdmin,isSeller,isCustomer}