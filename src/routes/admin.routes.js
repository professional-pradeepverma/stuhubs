const express = require("express");
const { register ,login, getProfile } = require("../controllers/admin.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { createpdf } = require("../controllers/pdf.controller");
const router = express.Router();


router.get("/profile", authenticate, getProfile);

router.post("/register", register);
router.post("/login", login);
router.post("/createpdf", createpdf);

module.exports = router;