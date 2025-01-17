const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const ejsmate = require("ejs-mate");
const mongoose = require("mongoose");
const Userr = require("./models/user.js");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.engine("ejs" , ejsmate);
app.use(express.urlencoded({extended : true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

main()
    .then((res) =>{
        console.log("connection succesfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/savewater');
}


app.listen(8080 , ()=>{
    console.log("app listening to 8080");
});
app.get("/main/shop" , (req , res)=>{
    res.render("mains/shop.ejs");
});
app.get("/main/home" , (req , res)=>{
    res.render("mains/home.ejs");
});
app.get("/main/home2" , (req , res)=>{
    res.render("mains/home2.ejs");
});
app.get("/main" , (req , res)=>{
    res.render("mains/index.ejs");
});

app.get("/main/shop" , (req, res)=>{
    res.render("mains/shop.ejs")
});


app.get("/main/level1" , (req , res)=>{
    res.render("mains/level1.ejs");
});

app.get("/main/level2" , (req,res)=>{
    res.render("mains/level2.ejs");
})

app.get("/main/level3" ,(req , res)=>{
    res.render("mains/level3.ejs");
});

app.get("/main/end" , (req,res)=>{
    res.render("mains/end.ejs");
});

app.get("/main/learnmore", (req , res)=>{
    res.render("mains/learnmore.ejs");
});

app.get("/main/contact" , (req, res)=>{
    res.render("mains/contact.ejs")
});
app.get("/main/info" , (req,res)=>{
    res.render("mains/info.ejs")
    
});
app.get("/main/policies" , (req,res)=>{
    res.render("mains/policies.ejs")
    
});



app.post("/submit" , (req, res)=>{
    let newuser = new Userr(req.body.user);
    newuser.save();
    // console.log(newuser);
    res.render("mains/submit.ejs" , {name : newuser.name});
});
