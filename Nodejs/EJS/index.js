const express = require("express");
const app = express();
const PORT = 8080;
// public
app.use(express.static("public"));
// set EJS file
app.set("views engine", "ejs");
const instaData = require("./data.json");

// EJS
app.get("/", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("Home.ejs", {num})
})
app.get("/home", (req, res) => {
    res.send("Home not page")
})
// passing data to EJS
app.get("/profile/:name", (req, res)=>{
    let {name} = req.params;
    res.render("Profile.ejs", {name});
})
// instagram post
app.get("/insta/:name", (req, res)=>{
    const name = req.params.name;
    const data = instaData[name];
    if(data){
        res.render("Insta.ejs",{data});
    }else{
        res.render("Error.ejs");
    }
     

})
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
