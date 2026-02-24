const pdfmodel = require("../models/pdf.model");

module.exports.getallpdf = async () => {
    const pdf = await pdfmodel.find();
    return pdf;
}

module.exports.searchpdf = async (pdfname) =>{
    const pdf = await pdfmodel.find({ pdfname });
    return pdf;
}

module.exports.createpdf = async ({pdfname,description,fileurl, reference}) => {
    if (!pdfname || !description || !fileurl || !reference) {
        throw new Error("All fields are required");
    }

    const existingpdf = await pdfmodel.findOne({ pdfname });
    if (existingpdf) {
        throw new Error("pdf already exists");
    }
    
    const newpdf = await pdfmodel.create({ pdfname, description, fileurl, reference });
    return newpdf;
}
