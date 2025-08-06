const router  = require('express').Router();
const ctrl    = require('../controllers/paymentController');

router.post('/',          ctrl.requestPayment); // POST /api/payments
router.post('/webhook',   ctrl.webhook);        // Web-hook
router.get('/',           ctrl.list);           // List all payments

module.exports = router;
