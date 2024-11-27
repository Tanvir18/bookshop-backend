const redisClient = require('../config/redisClient');

exports.createBook = async (bookDetails) => {
    const id = `book:${Date.now()}`; // Generate a unique ID
    const book = { id, ...bookDetails };
    await redisClient.json.set(id, '.', book);
    return book;
};

exports.findBookById = async (id) => {
    return await redisClient.json.get(id);
};

exports.updateBook = async (id, updates) => {
    const book = await redisClient.json.get(id);
    if (!book) {
        return null;
    }
    const updatedBook = { ...book, ...updates };
    await redisClient.json.set(id, '.', updatedBook);
    return updatedBook;
};
