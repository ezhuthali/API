const jwt = require('jsonwebtoken');
const User = require('../models/user');

const check = (token) => jwt.verify(token, process.env.JWT_KEY);

exports.generate = async (email) => await User.getUser({ email }).then((user) => {
	const PAYLOAD = { id: user._id, userName: user.username, email: user.email };
	const token = jwt.sign(PAYLOAD, process.env.JWT_KEY, {
		algorithm: 'HS256',
		expiresIn: '7d'
	});
	return token;
});

exports.privateRoutes = (request, response, next) => {
	try {
		let token = request.headers.authorization;
		if (token.startsWith('Bearer '))
			token = token.slice(7, token.length);
		request.user = check(token);
		return next();
	} catch (err) {
		console.log(err);
		response.status(401).json({ status: 401, message: 'unauthorized' })
	}
};


