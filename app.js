const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const ejsmate = require("ejs-mate");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.engine("ejs" , ejsmate);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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

app.post("/submit", (req, res) => {
    const name = req.body.name; // Access the "name" field from the form
    const email = req.body.email; // Access the "email" field
    const message = req.body.message; // Access the "message" field

    console.log("Form Submitted!");
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    const filePath = path.join(__dirname, "public/files/formData.txt");
    content =`\n${name},${email},${message}`
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        }

        console.log("Data written to file successfully!");
        return res.render("mains/submit.ejs");
    });

});
