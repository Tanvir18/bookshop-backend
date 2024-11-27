require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const redisClient = require('./config/redisClient'); // Import Redis client

const app = express();
app.use(express.json());

// Use Redis client directly without re-connecting
redisClient.on('error', (err) => {
    console.error('Redis client error:', err);
});

// Routes
app.use('/api/books', bookRoutes);

// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
