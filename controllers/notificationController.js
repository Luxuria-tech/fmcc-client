const Notification = require('../models/notificationModel');

exports.initTable = async (req, res) => {
  try {
    await Notification.createTable();
    res.status(200).json({ message: 'Notification table created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, date, message } = req.body;
    const newNotification = await Notification.create({ title, date, message });
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, date, message } = req.body;
    const updated = await Notification.update(id, { title, date, message });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await Notification.remove(id);
    res.json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
