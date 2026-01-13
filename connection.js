const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Database connected Successfully")).catch((err)=>console.log("error connectiong to database " ,err))
}
module.exports = {connectDB}
