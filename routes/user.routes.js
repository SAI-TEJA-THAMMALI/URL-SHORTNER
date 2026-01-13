const express = require('express')
const router = express.Router()
const User=require("../models/user.model.js")
const generateNewURL=require("../controllers/user.controller.js")
//todo
//get all the routes
//keep track of total visits



router.get("/:id",async (req,res)=>{
    const id=req.params.id
    const oldLink=await User.findById(id)
    if (!oldLink) return res.status(404).send("URL not found");
    oldLink.clicks+=1;
    await oldLink.save()
    res.redirect(oldLink.Url)

})

router.post("/URL",async (req,res)=>{
    const OldUrl=req.body.Url
    const present=await User.findOne({Url:OldUrl,createdBy:req.Customer._id})
    if(!present){
        const user=await User.create({Url:OldUrl,createdBy:req.Customer._id})
         newURL=await generateNewURL(user._id)
    }else{
         newURL=await generateNewURL(present._id)
    }
 allUrls=await User.find({createdBy:req.Customer._id})   
  return res.render('home',{
        url:newURL,
        urls:allUrls,
        req:req
        
    })

})

router.get("/URL/analytics/:id",async (req,res)=>{
    const user=await User.findById(req.params.id)
    res.status(202).json({url:user.Url,clicks:user.clicks})

})

 const UserRouter=router;
 module.exports=UserRouter