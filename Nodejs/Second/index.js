const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Home page");
})
// app.get("*", (req, res)=>{
//     res.send("Route not found")
// })
app.get("/apple", (req, res)=>{
    res.send("Apple page")
})
// params 
app.get("/profile/:username/:id", (req, res)=>{
    const {username, id} = req.params;
    res.send(`username @${username} and id @${id}`)
})
app.get("/search", (req, res)=>{
    let {price} = req.query;
    if(!price){
        res.send("No search here");
    }
    res.send(`Search ${price}`)
})
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on PORT of ${PORT} `)
})