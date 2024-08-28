const express = require("express");
const app = express();

app.get("/api/get",(req,res)=>{
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res)=>{
    res.send({
        user:{
            name:"Gourav yadav",
            age:22,
            content:4567890
        }
    })
})

app.listen(8000,()=>{
    console.log("listening to 8000");
})