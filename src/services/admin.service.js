const adminmodel = require("../models/admin.model");
const generatehashedpassword = require('../utils/generatehashedpassword');
const comparepassword = require('../utils/comparepassword');
const generateToken = require('../utils/generateToken');

module.exports.createadmin = async ({ adminname, email, password }) => {
    if (!adminname || !email || !password) {
        return "All fields are required";
    }

    const existingadmin = await adminmodel.findOne({ email });

    if (existingadmin) {
        throw new Error("admin already exists");
    }

    const hashedpassword = await generatehashedpassword(password);
    const admin = await adminmodel.create({ adminname, email, password: hashedpassword });
    return admin;
}


module.exports.loginadmin = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("All fields are required");
    }
    
    const user = await adminmodel.findOne({ email });
    if (!user) {
        throw new Error("Invalid admin");
    }
    
    const isMatch = await comparepassword(user, password);
    if (!isMatch) {
        throw new Error("Invalid Credentials");
    }
    
    const token = await generateToken(user);
    return { admin: user, token };
}

module.exports.getprofile = async ({decoded_id}) => {
    const admin = await adminmodel.findById(decoded_id).select("-password");

    if (!admin) {
        throw new Error("admin not found");
    }   

    return admin; 
};
