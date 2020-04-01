const books = {};
const Book = require('../models/books');

books.get = async () => {
	try {
		const books = await Book.find()
	} catch (err) {

	}
};

books.create = async (books) => {
	try {
		const inserted = await Book.insertMany(books, { rawResult: false });
		return inserted;
	} catch (err) {
		console.log(err);
	}
};
module.exports = books;