const express = require("express")
const app = express()

app.listen(3000, ()=>{
    console.log("App is running successfully")
})

app.get("/",(req,res)=>{
    console.log("This is Home Page")
    res.send("<h1> This is my Home Page </h1>")
})