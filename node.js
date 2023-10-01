const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(express.static("public"));


app.get("/", (req,res)=> {
    res.cookie("Authorized","True");
    res.sendFile(path.join(__dirname, "public","index.html"));
});



app.listen(6500, ()=> {
    console.log("Is vaar")
})