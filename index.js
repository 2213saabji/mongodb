const app=require("./app");

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("port is getting started on port "+PORT);
})