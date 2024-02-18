const express = require("express")
const app = express()
const user_routes = require("./user.routes")
const auth_routes = require("./auth.routes")



 
app.use("/user",user_routes)

app.use("",auth_routes)


module.exports = app