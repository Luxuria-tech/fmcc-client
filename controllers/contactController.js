const Contact = require('../models/contactModel');

exports.getContacts = async (_req, res, next) => {
  try { res.json(await Contact.findAll()); }
  catch (err) { next(err); }
};

exports.addContact = async (req, res, next) => {
  try {
    const saved = await Contact.create(req.body);
    res.status(201).json(saved);
  } catch (err) { next(err); }
};

exports.deleteContact = async (req, res, next) => {
  try {
    await Contact.remove(req.params.id);
    res.status(204).end();
  } catch (err) { next(err); }
};
