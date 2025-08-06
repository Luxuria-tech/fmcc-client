const db = require('../config/db');

exports.createTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS notifications (
      id SERIAL PRIMARY KEY,
      title VARCHAR(120) NOT NULL,
      date DATE NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

/* CRUD helpers */

exports.findAll = async () => {
  const { rows } = await db.query('SELECT * FROM notifications ORDER BY created_at DESC');
  return rows;
};

exports.create = async ({ title, date, message }) => {
  const sql = `
    INSERT INTO notifications (title, date, message, created_at, updated_at)
    VALUES ($1, $2, $3, NOW(), NOW())
    RETURNING *`;
  const { rows } = await db.query(sql, [title, date, message]);
  return rows[0];
};

exports.update = async (id, data) => {
  const { title, date, message } = data;
  const sql = `
    UPDATE notifications SET
      title=$1, date=$2, message=$3, updated_at=NOW()
    WHERE id=$4 RETURNING *`;
  const { rows } = await db.query(sql, [title, date, message, id]);
  return rows[0];
};

exports.remove = async (id) => {
  await db.query('DELETE FROM notifications WHERE id=$1', [id]);
};
