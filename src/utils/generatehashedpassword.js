const bcrypt = require('bcryptjs');

const generatehashedpassword = async (password) => {
    const hashedpassword = await bcrypt.hash(password, 10)
    return hashedpassword;
}

module.exports = generatehashedpassword;