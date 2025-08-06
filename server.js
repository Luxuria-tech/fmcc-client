const dotenv = require('dotenv');
const path = require('path');

const express = require('express');
const cors = require('cors');
const app = express(); 


app.use(cors());
dotenv.config();




const initDB = require('./initDB');
const blogRoutes = require('./routes/blogRoutes');
const notificationRoutes = require('./routes/noticationRoutes')
const eventRoutes = require('./routes/eventRoutes');
const contactRoutes = require('./routes/contactRoutes');
const paymentsRoutes = require('./routes/paymentRoutes')


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/notifications', notificationRoutes);

app.use('/api/payments', paymentsRoutes);

app.get('/', (_req, res) => res.send('FMCC API running'));
initDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server on http://localhost:${PORT}`));


