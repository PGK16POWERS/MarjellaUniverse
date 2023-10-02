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
    res.render("qoutePage.ejs")
})


app.listen(6500, ()=> {
    console.log("Is vaar")
})