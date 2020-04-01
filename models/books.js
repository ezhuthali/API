const mongoose = require('../db');

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	description: { type: String, required: false },
	publisher: { type: String, required: false },
	publishedOn: { type: String, required: false },
	owner: { type: String, required: false, default: 'Krishnapriya' }
}, { timestamps: true });

const Book = mongoose.model('book', bookSchema);

module.exports = Book;