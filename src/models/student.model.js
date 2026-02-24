const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    studentname: {
        type: String,
        required: true,
        unique: true
    },
    stuid: {
        type: String,
        required: true,
        unique: true
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
        enum:['student'],
        type:String,
        default:'student'
    }
})


const studentmodel = mongoose.model("student", studentSchema);
module.exports = studentmodel;