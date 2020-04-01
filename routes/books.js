const router = require('express').Router();
const { celebrate, Joi, errors } = require('celebrate');
const bookService = require('../services/bookService');
router.get('/get', (_req, res) => {
	bookService.get()
});

router.post('/create', celebrate({
	// try items if has not works!
	body: Joi.array().has(Joi.object().keys({
		title: Joi.string().required(),
		author: Joi.string().required(),
		description: Joi.string().required(),
		publisher: Joi.string().required(),
		publishedOn: Joi.string().required(),
		owner: Joi.string().required()
	}))
}), errors(), (req, res) => {
	bookService.create(req.body)
});

router.delete('/delete', (_req, res) => {

});

module.exports = router;