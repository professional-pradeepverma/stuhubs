const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true,
        unique: true
    },
    admid: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        enum:['admin'],
        type:String,
        default:'admin'
    }
})


const adminmodel = mongoose.model("admin", adminSchema);
module.exports = adminmodel;