const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
    const authheader = req.headers.authorization;


    if (!authheader || !authheader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({ message: "No token provided" });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.decoded = decoded;

        next();
        
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Invalid token" });
    }


}
module.exports = { authenticate };