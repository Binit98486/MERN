const express = require("express")
const router = express.Router()
const LabelController = require("../app/controllers/label.controller")
const label_ctrl = new LabelController()
const loginCheck = require("../app/middleware/auth.middleware")


router.route('/')
 .get()
 .post(loginCheck,label_ctrl.createLabel)

router.route("/:id")
 .get()
 .put()
 .delete()   
