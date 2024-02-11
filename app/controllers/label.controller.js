class LabelController{

  createLabel = (req,res,next)=>{
   res.json({
    result:{},
    msg:"Label created",
    status:true
   })
  }

}

module.exports = LabelController