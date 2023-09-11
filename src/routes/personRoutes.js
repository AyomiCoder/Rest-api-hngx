// src/routes/personRoutes.js
const express = require('express');
const router = express.Router();
const {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
  } = require('../controllers/personController');
  
  // Create a new person
  router.post('/api', createPerson);
  
  // Read details of a person by user_id
  router.get('/api/:user_id', getPerson);
  
  // Update details of an existing person by user_id
  router.put('/api/:user_id', updatePerson);
  
  // Delete a person by user_id
  router.delete('/api/:user_id', deletePerson);
  
  module.exports = router;  