// src/controllers/personController.js
const Person = require('../models/Person');

// Create a new person
const createPerson = async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a person' });
  }
};

// Read details of a person by user_id
const getPerson = async (req, res) => {
  try {
    const person = await Person.findOne({ user_id: req.params.user_id });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch person' });
  }
};

// Update details of an existing person by user_id
const updatePerson = async (req, res) => {
  try {
    const person = await Person.findOneAndUpdate(
      { user_id: req.params.user_id },
      req.body,
      { new: true }
    );
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
};

// Delete a person by user_id
const deletePerson = async (req, res) => {
  try {
    const person = await Person.findOneAndDelete({ user_id: req.params.user_id });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
};

module.exports = { createPerson, getPerson, updatePerson, deletePerson };