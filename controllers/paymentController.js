const axios  = require('axios');
const Payment = require('../models/paymentModel');

const api = axios.create({
  baseURL:  process.env.NKWA_BASE,
  headers: {
    Authorization: `Bearer ${process.env.NKWA_API_KEY}`,
    'Content-Type': 'application/json',
  },
});


exports.requestPayment = async (req, res) => {
  try {
    const { fullName, momoNumber, amount } = req.body;

    
    const pending = await Payment.insertPending({ fullName, momoNumber, amount });

   
    const { data } = await api.post('/collections/momo', {
      phone_number : momoNumber,
      amount,
      currency     : 'XAF',
      description  : `FMCC payment by ${fullName}`,
      callback_url : `${process.env.BASE_URL}/api/payments/webhook`,
    });

    
    await Payment.attachNkwaRef(pending.reference, data.reference);

    res.status(201).json({
      message  : 'Payment prompt sent. Approve on your phone.',
      reference: pending.reference,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: 'Failed to initiate payment' });
  }
};


exports.webhook = async (req, res) => {
  try {
    const { reference, status } = req.body; 
    await Payment.updateStatus(reference, status);
    res.status(200).json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(500).end();
  }
};


exports.list = async (_req, res) => res.json(await Payment.findAll());
