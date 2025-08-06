const db = require('../config/db');

exports.createTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(80),
      email VARCHAR(120) NOT NULL,
      phone VARCHAR(30),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

exports.findAll = async () => {
  const { rows } = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
  return rows;
};

exports.create = async ({ name, email, phone, message }) => {
  const sql = `
    INSERT INTO contacts (name, email, phone, message, created_at)
    VALUES ($1,$2,$3,$4,NOW()) RETURNING *`;
  const { rows } = await db.query(sql, [name, email, phone, message]);
  return rows[0];
};

exports.remove = async (id) => {
  await db.query('DELETE FROM contacts WHERE id=$1', [id]);
};
