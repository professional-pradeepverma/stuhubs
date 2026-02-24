const express = require("express");
const router = express.Router();

const { getallpdf, searchpdf } = require('../controllers/pdf.controller');

router.get('/', getallpdf);
router.get('/search/:id', searchpdf);




module.exports = router;