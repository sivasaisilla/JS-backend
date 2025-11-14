require('dotenv').config();
const express = require("express");
const app =express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>You are a gay<h1>");
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+port);
})