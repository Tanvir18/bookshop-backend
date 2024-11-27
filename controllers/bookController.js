const bookService = require('../services/bookService');

exports.registerBook = async (req, res, next) => {
    try {
        const book = await bookService.registerBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

exports.getBook = async (req, res, next) => {
    try {
        const book = await bookService.getBook(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

exports.buyBook = async (req, res, next) => {
    try {
        const result = await bookService.buyBook(req.params.id, req.body.quantity);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
