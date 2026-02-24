const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    return token;
}

module.exports = generateToken;
