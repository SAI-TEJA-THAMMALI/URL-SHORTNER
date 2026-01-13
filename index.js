const express = require('express')
require('dotenv').config();

const {connectDB}=require('./connection.js')
const cookieParser=require('cookie-parser')
const path=require('path')
const {restrictToLoggedInUserOnly} = require('./middleware/verifyCookies.js')
const UserRouter=require("./routes/user.routes.js")
const staticRoute = require("./routes/staticRouter.route.js")
const CustomerRouter=require("./routes/customer.route.js")
const app = express()
const PORT=8001 || process.env.PORT
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())

app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`)})

connectDB()
app.use("/",CustomerRouter)
app.use("/test",restrictToLoggedInUserOnly,staticRoute)
app.use("/user",restrictToLoggedInUserOnly,UserRouter)
