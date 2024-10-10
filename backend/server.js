const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const token = jwt.sign({ userId: 'user123' }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

console.log('Generated Token:', token);

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/contributions', require('./routes/contributions'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
