// controllers/personController.js
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

// Read details of persons by user_id or name (optional query parameters)
const getPersons = async (req, res) => {
  try {
    const query = {};
    if (req.query.user_id) {
      query.user_id = req.query.user_id;
    }
    if (req.query.name) {
      query.name = req.query.name;
    }

    const persons = await Person.find(query);

    if (persons.length === 0) {
      return res.status(404).json({ error: 'No matching persons found' });
    }

    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
};

// Read details of a person by user_id or name (optional query parameters)
const getPerson = async (req, res) => {
  try {
    const queryParam = req.params.queryParam;
    const query = {
      $or: [
        { user_id: queryParam },
        { name: queryParam },
      ],
    };

    const person = await Person.findOne(query);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch person' });
  }
};

// Update details of an existing person by user_id or name (optional query parameters)
const updatePerson = async (req, res) => {
  try {
    const queryParam = req.params.queryParam;
    const query = {
      $or: [
        { user_id: queryParam },
        { name: queryParam },
      ],
    };

    const person = await Person.findOneAndUpdate(query, req.body, { new: true });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
};

// Delete a person by user_id or name (optional query parameters)
const deletePerson = async (req, res) => {
  try {
    const queryParam = req.params.queryParam;
    const query = {
      $or: [
        { user_id: queryParam },
        { name: queryParam },
      ],
    };

    const person = await Person.findOneAndDelete(query);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
};

module.exports = { createPerson, getPersons, getPerson, updatePerson, deletePerson };
