const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const uri = "mongodb+srv://Marjella:Marjella@diamondburg.lxfxn0d.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.set("view engine","ejs")
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("views"))

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then (()=> {
    console.log("Marjella Ke Star");
}). catch(()=> {
    console.error("Error Experinced: ", err)
})

const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
    email: String
});

const newsSchema = mongoose.model("Newsletter",newsletterSchema);

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

app.post("/newsletter", async (req,res)=> {
    const email = req.body.email;
    const newUser = new newsSchema({email})

    const checkDb = await newsSchema.findOne({email});

    if(!checkDb) {
        await newUser.save();
        res.cookie("signedUp","TRUE")
        res.render("success.ejs");
    } else {
        console.log("Error, User already exists");
        res.render("fail.ejs");
    }
    console.log(email);
});


app.listen(6500, ()=> {
    console.log("Is vaar")
})