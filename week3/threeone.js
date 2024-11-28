const express=require("express");
const app=express();
app.use(express.json());
app.post("/health",function(req,res){
    const kidneys=req.headers.kidneys;
    const kidneylength=kidneys.length;
    
    res.send("your kidney is "+kidneylength);
})
app.listen(3000);