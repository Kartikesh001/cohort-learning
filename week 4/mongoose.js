const mongoose=require("mongoose");
const express=require("express");
const app = express();
mongoose.connect("mongodb+srv://kartikeshking02:v2nS9TLjpCXSDjQW@cluster0.0xum9.mongodb.net/user_app")
// mogoose.create({

// })
const Users = mongoose.model('Users', { name: String, email : String,password: String 
 });
app.post("/",async function(req,res){
    const name=req.body.name;
    const password=req.body.password;
    const username=req.body.username;
    
    const existinguser=await Users.findOne({email:username});
    if(existinguser){
        res.status(400).send("username already in use")
    }
    const user = new Users({ name: name,
        email: username,
        password: password});
        user.save();

})



app.listen(300,function(){
    console.log("running");
});
// kitty.save().then(() => console.log('meow'));