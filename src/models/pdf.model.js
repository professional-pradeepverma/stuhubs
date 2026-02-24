const mongoose = require("mongoose");


const pdfSchema = new mongoose.Schema({
    pdfname: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    createdate: {
        type: Date,
        default: Date.now
    },
    fileurl: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        default: "clgprofessor"
    },
    })


const pdfmodel = mongoose.model("pdf", pdfSchema);
module.exports = pdfmodel;