const express = require("express")
const app = express()
const user_routes = require("./user.routes")
const auth_routes = require("./auth.routes")



app.get("/", (req, res,next) => {
 res.json({
  result: {
   images: "",
   id: 1,
   name: "Binit"
  },
  msg: "success",
  status: true
 })
 next()
})
app.post("/", (req, res,next) => {
 res.json({
  result: "pass",
  msg: "success",
  status: true
 })
})
app.use("/user",user_routes)

app.use("",auth_routes)


module.exports = app