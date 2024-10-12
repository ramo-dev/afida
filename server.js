const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/contributions', require('./routes/contributions'));
app.use('/api/users', require('./routes/users'));
app.use('/api/organizers', require('./routes/organizers'));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
