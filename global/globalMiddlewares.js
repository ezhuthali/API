const routes = require('../routes');
const bodyParser = require('body-parser');
const token = require('../utils/auth');
const formidable = (request, response, next) => {
	if (request.headers["content-type"].startsWith('multipart/for-data')) {
		const form = new require('formidable').IncomingForm();
		form.parse(request, (err, fields, files) => {
			if (err) {
				console.log(err);
				response.status(500).json('cannot parse form');
			} else {
				request.body = { fields, files };
				return next();
			}
		})
	} else return next();
};
/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
const globalMiddlewares = (app, server) => {

	// content-type
	app.use(formidable, bodyParser.json(), bodyParser.urlencoded({ extended: true }));
	// public routes
	app.use('/api/v1/auth/', routes.auth);

	app.use(token.privateRoutes);
	// private routes
	app.use('/api/v1/admin', routes.admin);
	app.use('/api/v1/event', routes.event);
};

module.exports = globalMiddlewares;
