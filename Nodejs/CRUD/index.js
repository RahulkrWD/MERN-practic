const express = require("express");
const app = express();

// set EJS files
app.set("view engine", "ejs");
// use Public
app.use(express.static("public"));

let posts = [
    {id: 1, username: "Rahul", contant: "Static post"}
]
app.get("/", (req, res)=>{
    res.render("Home.ejs", {posts})
});


const PORT = 4040;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})