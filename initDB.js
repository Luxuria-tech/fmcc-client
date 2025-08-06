const { createTable: createBlog } = require('./models/blogModel');
const { createTable: createMomo } = require('./models/paymentModel');
const { createTable: createNotification} = require('./models/notificationModel');
const { createTable: createEvent } = require('./models/eventModel');
const { createTable: createContactTable } = require('./models/contactModel');

module.exports = async () => {
  await createBlog();
  await createEvent ();
  await createMomo();
  await createNotification();
  await createContactTable();
  console.log('✅ Blog table ready');
  console.log('✅ contact table ready');
};





