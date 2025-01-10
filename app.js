const express = require("express");
const app = express();
const path = require("path")

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

app.listen(8080 , ()=>{
    console.log("app listening to 8080");
});

app.get("/main" , (req , res)=>{
    res.render("index.ejs");
});

app.get("/main/brush" , (req , res)=>{
    res.render("brush.ejs");
})