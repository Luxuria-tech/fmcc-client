const Event = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { title, date, description, location } = req.body;
    if (!title || !date || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const event = await Event.create({ title, date, description, location });
    res.status(201).json(event);
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, date, description, location } = req.body;
    if (!title || !date || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const updatedEvent = await Event.update(id, { title, date, description, location });
    if (!updatedEvent) return res.status(404).json({ error: 'Event not found' });
    res.json(updatedEvent);
  } catch (err) {
    console.error('Error updating event:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await Event.remove(id);
    res.status(204).send();
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
