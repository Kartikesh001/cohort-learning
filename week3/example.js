const express = require("express");
const app = express();
app.get('/',function(req,res){
    console.log("hoooo");
},function(req,res){
    console.log("helllo");
})
app.listen(3000);