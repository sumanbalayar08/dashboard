const express=require("express")
const router=express.Router()
const Data=require("../models/DataSchema")


router.get('/',async(req,res)=>{
    try{
        const filters = req.query;
    const data = await Data.find(filters);
    res.status(200).json(data);

    }catch(error){
        console.error(error);
        res.status(500).send({success:false,message:"Unable to Fetch the api"})
    }
})
module.exports=router;