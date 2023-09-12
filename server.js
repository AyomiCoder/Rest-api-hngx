// src/app.js
const express = require('express');
const app = express();
const port = 3000;

// Connect to MongoDB
const db = require('./config/db')

// Middleware for JSON parsing
app.use(express.json());

// API routes
const personRoutes = require('./src/routes/personRoutes');
app.use('/', personRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



