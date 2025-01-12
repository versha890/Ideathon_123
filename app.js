const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.engine("ejs" , ejsmate);

app.listen(8080 , ()=>{
    console.log("app listening to 8080");
});
app.get("/home" , (req , res)=>{
    res.render("mains/home.ejs");
});
app.get("/main" , (req , res)=>{
    res.render("mains/index.ejs");
});

app.get("/main/shop" , (req, res)=>{
    res.render("mains/shop.ejs")
});


app.get("/main/brush" , (req , res)=>{
    res.render("mains/brush.ejs");
});

app.get("/main/next" , (req,res)=>{
    res.render("mains/next.ejs");
})
