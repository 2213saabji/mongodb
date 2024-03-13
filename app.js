const Express=require("express");
const dotEnv=require("dotenv");
// const productroute=require("../routes/productRoutes");
const app=Express();
dotEnv.config();

app.use(Express.json());

// require("../connectToDb/connection")

// app.use("/app",productroute)

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hello sir how are you , i am fine , wow")
})
module.exports=app;