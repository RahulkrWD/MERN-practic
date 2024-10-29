const express = require("express");
const app = express();

app.use(express.static("public"));
// set EJS file
app.set("views engine", "ejs");

const PORT = 4500;
const items = [
    {id: 1, item: "apple", price: 50},
    {id: 2, item: "Banana", price: 20},
    {id:3, item: "Grapes", price: 30}
]

app.get("/", (req, res)=>{
    res.render("Home.ejs" , {items})
})

app.get("/cart", (req, res)=>{
    res.render("Cart.ejs")
})

app.listen(PORT, ()=>{
    console.log(`server is running on PORT of ${PORT}`);
})