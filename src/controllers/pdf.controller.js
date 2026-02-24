const pdfservice = require('../services/pdf.service') ;

const getallpdf = async (req, res) => {
    try {
        const pdf = await pdfservice.getallpdf();
        res.status(200).json(pdf);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchpdf = async (req, res) => {
    try {
        const { pdfname } = req.body;
        const pdf = await pdfservice.searchpdf(pdfname);
        res.status(200).json(pdf);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createpdf = async (req, res) => {
    try {
        const { pdfname, description, fileurl, reference } = req.body;
        const newpdf = await pdfservice.createpdf({pdfname,description,fileurl, reference});
        res.status(201).json(newpdf);
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getallpdf, searchpdf, createpdf };