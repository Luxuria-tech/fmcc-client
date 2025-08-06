const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/contactController');

router.get('/',   ctrl.getContacts);
router.post('/',  ctrl.addContact);
router.delete('/:id', ctrl.deleteContact);

module.exports = router;
