// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const db = require('../config/db');

// Connect to MongoDB
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});


// Middleware for JSON parsing
app.use(express.json());

// API routes
const personRoutes = require('./routes/personRoutes');
app.use('/', personRoutes);

// Connect to MongoDB
// mongoose.
// connect('mongodb+srv://OxAyomide:Aluko@hngx.xgnvagh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,
// useUnifiedTopology: true})
// .then(() =>{
//   console.log('Connected to MongoDB Atlas');

// }).catch((error) =>{
//   console.log('MongoDB connection error:', error)
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



