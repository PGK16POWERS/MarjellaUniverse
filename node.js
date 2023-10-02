const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");

app.set("view engine","ejs")
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("views"))


app.get("/", (req,res)=> {
    res.cookie("Authorized","True");
    res.sendFile(path.join(__dirname, "public","index.html"));
});

app.get("/qoute", (req,res)=> {
    const data = { title:"Danko Supreme"}
    res.render("qoutePage.ejs", data)
})

app.get("/next", (req,res)=> {
    res.render("timeDemand.ejs");
})

app.get("/back", (req,res)=> {
    res.render("qoutePage.ejs");
})

app.get("/getQoute", (req,res)=> {
    res.render("qoutation.ejs");
});

app.post("/newsletter", (req,res)=> {
    const email = req.body.email;
    
})


app.listen(6500, ()=> {
    console.log("Is vaar")
})