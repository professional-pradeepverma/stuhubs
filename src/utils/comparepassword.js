const bcrypt = require('bcryptjs');

const comparepassword = async (user, password) => {
    const isMatch = await bcrypt.compare(password, user.password)
    return isMatch;
}

module.exports = comparepassword;   