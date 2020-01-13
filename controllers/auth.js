
const authController = {};
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwtToken = require('../utils/auth');

authController.login = async (cred) => {
	const user = await User.getUser({ email: cred.email })
	if (user)
		if (bcrypt.compareSync(cred.password, user.password)) {
			const token = await jwtToken.generate(cred.email);
			return { token, message: 'success' };
		}
		else return { token: false, message: 'wrong password' };
	else return { token: false, message: 'user not found' };
};

module.exports = authController;