const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    contant:{
        type: String,
        require: true
    }
})
module.exports = mongoose.model("user", userSchema)