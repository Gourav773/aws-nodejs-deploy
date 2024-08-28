const express = require("express");
const app = express();
require("dotenv").config

app.get("/api/get",(req,res)=>{
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res)=>{
    res.send({
        user:{
            name:"Gourav yadav",
            age:22,
            content:4567890
        },env:process.env.Name
    })
})

app.listen(process.env.PORT,()=>{
    console.log("listening to 8000");
})