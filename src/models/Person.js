// src/models/Person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  user_id: {
    type: Number,
  },
});

module.exports = mongoose.model('Person', personSchema, 'persons');

