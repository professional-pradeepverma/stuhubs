const express = require("express");
const { register, login, getProfile } = require("../controllers/student.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = express.Router();


router.get("/profile", authenticate, getProfile);



router.post("/register", register);
router.post("/login", login);

module.exports = router;