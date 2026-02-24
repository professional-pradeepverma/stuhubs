const adminservice = require("../services/admin.service");

const register = async (req, res, next) => {
    try {
        const { adminname, email, password } = req.body;
        const result = await adminservice.createadmin({ adminname, email, password });
        res.status(201).json({ message: "admin registered successfully", admin: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { admin, token } = await adminservice.loginadmin({ email, password });
        res.status(200).json({ message: "Login successful", token, admin });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const getProfile = async (req, res, next) => {
    try {
        const decoded = req.decoded;
        const admin = await adminservice.getprofile({decoded_id: decoded.id});
        res.status(200).json({ admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

module.exports = { register, login, getProfile };