const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Loads environment variables from .env file

const app = express();
app.use(express.json());  // Allows express to parse JSON bodies

// Connect to MongoDB using the URI from .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Import and use the contact routes
const contactRoutes = require('./routes/contacts');
app.use('/contacts', contactRoutes);

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));
