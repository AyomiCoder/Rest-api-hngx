// src/routes/personRoutes.js
const express = require('express');
const router = express.Router();
const {
    createPerson,
    getPersons,
    getPerson,
    updatePerson,
    deletePerson,
  } = require('../controllers/personController');
  
  // Create a new person
  router.post('/api', createPerson);

  // Read all
  router.get('/api', getPersons);
  
  // Read details of a person by user_id or name
  router.get('/api/:queryParam', getPerson);
  
  // Update details of an existing person by user_id
  router.put('/api/:queryParam', updatePerson);
  
  // Delete a person by user_id
  router.delete('/api/:queryParam', deletePerson);
  
  module.exports = router;  