const bookRepository = require('../repositories/bookRepository');

exports.registerBook = async (bookDetails) => {
    return await bookRepository.createBook(bookDetails);
};

exports.getBook = async (id) => {
    const book = await bookRepository.findBookById(id);
    if (!book) {
        throw { status: 404, message: 'Book not found' };
    }
    return book;
};

exports.updateBook = async (id, updates) => {
    const updatedBook = await bookRepository.updateBook(id, updates);
    if (!updatedBook) {
        throw { status: 404, message: 'Book not found' };
    }
    return updatedBook;
};

exports.buyBook = async (id, quantity) => {
    const book = await bookRepository.findBookById(id);
    if (!book) {
        throw { status: 404, message: 'Book not found' };
    }

    if (book.stock < quantity) {
        throw { status: 400, message: 'Not enough stock' };
    }

    book.stock -= quantity;
    await bookRepository.updateBook(id, { stock: book.stock });

    return { message: 'Purchase successful', remainingStock: book.stock };
};
