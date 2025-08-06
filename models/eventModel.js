const db = require('../config/db');

exports.createTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(120) NOT NULL,
      date DATE NOT NULL,
      description TEXT NOT NULL,
      location VARCHAR(255),           -- optional field, customize if you want
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

/* CRUD helpers */

exports.findAll = async () => {
  const { rows } = await db.query('SELECT * FROM events ORDER BY date ASC');
  return rows;
};

exports.create = async ({ title, date, description, location }) => {
  const sql = `
    INSERT INTO events (title, date, description, location, created_at, updated_at)
    VALUES ($1, $2, $3, $4, NOW(), NOW())
    RETURNING *`;
  const { rows } = await db.query(sql, [title, date, description, location]);
  return rows[0];
};

exports.update = async (id, data) => {
  const { title, date, description, location } = data;
  const sql = `
    UPDATE events SET
      title=$1, date=$2,
      description=$3, location=$4, updated_at=NOW()
    WHERE id=$5 RETURNING *`;
  const { rows } = await db.query(sql, [title, date, description, location, id]);
  return rows[0];
};

exports.remove = async (id) => {
  await db.query('DELETE FROM events WHERE id=$1', [id]);
};
