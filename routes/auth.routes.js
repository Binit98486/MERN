const router =  require("express").Router()
const AuthController  = require("../app/controllers/auth.controller")
const auth_ctrl = new AuthController()
 const uploader= require('../app/middleware/file-upload.middleware')
const setDestination=(req,res,next)=>{
 req.dest="/users";
 next()
} 

// aauta matra file xa vane single ,if multiple xa vane single and  ("image") vaneko key ho jun ma file upload hunxa i.e imageFile,thumbnailfile
router.post("/register",setDestination,uploader.single("image"), auth_ctrl.register)

router.post("/login",auth_ctrl.login)


module.exports = router;
