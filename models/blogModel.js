const db = require('../config/db');

exports.createTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(120) NOT NULL,
      author VARCHAR(80) NOT NULL,
      date DATE NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

/* ✅ Get all blogs */
exports.findAll = async () => {
  const { rows } = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
  return rows;
};

/* ✅ Get a single blog by ID */
exports.findById = async (id) => {
  const { rows } = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
  return rows[0]; // return first result or undefined if not found
};

/* ✅ Create new blog */
exports.create = async ({ title, author, date, description, image_url }) => {
  const sql = `
    INSERT INTO blogs (title, author, date, description, image_url, created_at, updated_at)
    VALUES ($1,$2,$3,$4,$5,NOW(),NOW())
    RETURNING *`;
  const { rows } = await db.query(sql, [title, author, date, description, image_url]);
  return rows[0];
};

/* ✅ Update blog */
exports.update = async (id, data) => {
  const { title, author, date, description, image_url } = data;
  const sql = `
    UPDATE blogs SET
      title=$1, author=$2, date=$3,
      description=$4, image_url=$5, updated_at=NOW()
    WHERE id=$6 RETURNING *`;
  const { rows } = await db.query(sql, [title, author, date, description, image_url, id]);
  return rows[0];
};

/* ✅ Delete blog */
exports.remove = async (id) => {
  await db.query('DELETE FROM blogs WHERE id=$1', [id]);
};
