// controllers/personController.js
const mongoose = require('mongoose');
const Person = require('../models/Person');

// Create a new person
const createPerson = async (req, res) => {
  try {
    const person = new Person(req.body)
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a person' });
  }
};

// Read all persons
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Read details of a person by user_id or name 
const getPerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, search by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, search by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOne(query);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update details of an existing person by _id or name
const updatePerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, update by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, update by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOneAndUpdate(query, req.body, { new: true });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a person by _id or name
const deletePerson = async (req, res) => {
  try {
    let query;
    if (mongoose.Types.ObjectId.isValid(req.params.idOrName)) {
      // If it's a valid ObjectId, delete by _id
      query = { _id: req.params.idOrName };
    } else {
      // If it's not a valid ObjectId, delete by name
      query = { name: req.params.idOrName };
    }
    const person = await Person.findOneAndDelete(query);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createPerson, getAllPersons, getPerson, updatePerson, deletePerson };
