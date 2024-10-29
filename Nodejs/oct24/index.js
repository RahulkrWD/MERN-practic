const express = require("express");
const db = require("./db");
const userModel = require("./userModel");
// Initialize Database
db();
const app = express();
app.use(express.json());
const PORT = 5500;
// Set view engine to EJS
app.set("view engine", "ejs");
app.use(express.static('public'));
// post and create a user
app.post("/user", async (req, res)=>{
    try{
        const { name, price, contant} = req.body;
        if (!name || !price || !contant) {
            return res.status(400).send("All fields (name, price, and contant) are required.");
        }
        const find = await userModel.create({ name, price, contant})
        res.send(find)
    }catch(err){
        res.send("Post Not created")
    }
    
})
// get and read all user
app.get("/", async (req, res) => {
    try {
        const findUser = await userModel.find();
        
        // Render 'Home.ejs' and pass 'findUser' data
        res.render("Home.ejs", { findUser });
    } catch (err) {
        res.send("Users Not Found");
    }
});
// get and read individual user using id
app.get("/user/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        let query = {};
        if(id){
            query = {_id: id}
        }
        const getUser = await userModel.find(query);
        res.send(getUser)
    }catch(err){
        res.send("User Not found")
    }
   

})
// delete individual user using id
app.delete("/user/:id", async (req, res)=>{
    const id = req.params.id;
    const dltUser = await userModel.deleteOne({_id: id});
    res.send(dltUser)
})

// update or modify individual user using id
app.put("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { price, name , contant} = req.body; 
        const updateUser = await userModel.findOneAndUpdate(
            { _id: id },          
            { price: price, name: name, contant: contant }, 
            { new: true } 
                    
        );
        res.send(updateUser);
    } catch (error) {
        res.send({ error: "Error updating user", details: error.message });
    }
});

// user get in post man
app.get("/user")

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})