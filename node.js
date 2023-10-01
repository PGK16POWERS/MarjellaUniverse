const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(express.static("public"));


app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "public","index.html"));
    res.cookie("Authorized","True");
});



app.listen(6500, ()=> {
    console.log("Is vaar")
})