const redis = require('redis');

// Use IPv4 localhost (127.0.0.1) explicitly
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

// Handle connection events
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

// Connect to Redis (only once)
(async () => {
    try {
        await redisClient.connect();
        console.log('Redis client connected successfully.');
    } catch (error) {
        console.error('Error connecting to Redis:', error.message);
    }
})();

// Export Redis client for use in other parts of the app
module.exports = redisClient;