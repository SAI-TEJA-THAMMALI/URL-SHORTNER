const express=require('express')
const User = require('../models/user.model')
const router=express.Router()


router.get("/",async(req,res)=>{

    allUrls=await User.find({createdBy:req.Customer._id})
    return res.render('home',{
        
        urls:allUrls
        
    })

})
module.exports=router