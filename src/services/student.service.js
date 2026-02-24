const studentmodel = require("../models/student.model");
const generatehashedpassword = require('../utils/generatehashedpassword');
const comparepassword = require('../utils/comparepassword');
const generateToken = require('../utils/generateToken');

module.exports.createstudent = async ({ studentname, email, password }) => {
    if (!studentname || !email || !password) {
        return "All fields are required";
    }

    const existingstudent = await studentmodel.findOne({ email });

    if (existingstudent) {
        throw new Error("student already exists");
    }

    const hashedpassword = await generatehashedpassword(password);
    const student = await studentmodel.create({ studentname, email, password: hashedpassword });
    return student;
}

module.exports.loginstudent = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("All fields are required");
    }
    
    const user = await studentmodel.findOne({ email });
    if (!user) {
        throw new Error("Invalid student");
    }
    
    const isMatch = await comparepassword(user, password);
    if (!isMatch) {
        throw new Error("Invalid Credentials");
    }
    
    const token = await generateToken(user);
    return { user, token };
}

module.exports.getprofile = async ({decoded_id}) => {
    const student = await studentmodel.findById(decoded_id).select("-password");

    if (!student) {
        throw new Error("student not found");
    }   

    return student; 
};

