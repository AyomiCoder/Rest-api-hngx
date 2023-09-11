// src/models/Person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  user_id: {
    type: String,
    unique: true, 
    required: true,
  },
});

module.exports = mongoose.model('Person', personSchema, 'persons');

