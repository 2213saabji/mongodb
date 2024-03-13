const Express=require("express");
const dotEnv=require("dotenv");
// const productroute=require("../routes/productRoutes");
const app=Express();
dotEnv.config();

app.use(Express.json());

// require("../connectToDb/connection")

// app.use("/app",productroute)


module.exports=app;