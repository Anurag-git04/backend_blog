

const express = require("express")
const app = express()

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json())

const blog = require("./routes/blog")

app.use("/api/v1",blog);

const connectwithDb = require("./config/database")
connectwithDb();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("Welcome to my blog API")
})