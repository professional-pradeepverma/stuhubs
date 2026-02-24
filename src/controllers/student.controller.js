const studentService = require("../services/student.service");

const register = async (req, res, next) => {
    try {
        const { studentname, email, password } = req.body;
        const result = await studentService.createstudent({ studentname, email, password });
        res.status(201).json({ message: "student registered successfully", student: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { student, token } = await studentService.loginstudent({ email, password });
        res.status(200).json({ message: "Login successful", token, student });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const getProfile = async (req, res, next) => {
    try {
        const decoded = req.decoded;
        const student = await studentService.getprofile({decoded_id: decoded.id});
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

module.exports = { register, login, getProfile };