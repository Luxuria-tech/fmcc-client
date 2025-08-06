const db = require('../config/db');
const { v4: uuid } = require('uuid');

exports.createTable = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS payments (
      id           SERIAL PRIMARY KEY,
      reference    UUID UNIQUE,
      nkwa_ref     VARCHAR(120),
      full_name    VARCHAR(120) NOT NULL,
      momo_number  VARCHAR(20)  NOT NULL,
      amount       NUMERIC(12,2) NOT NULL,
      status       VARCHAR(20)  DEFAULT 'PENDING',
      created_at   TIMESTAMP    DEFAULT NOW(),
      updated_at   TIMESTAMP    DEFAULT NOW()
    );
  `);
};

exports.insertPending = async ({ fullName, momoNumber, amount }) => {
  const reference = uuid();
  const { rows } = await db.query(
    `INSERT INTO payments (reference, full_name, momo_number, amount)
     VALUES ($1,$2,$3,$4) RETURNING *`,
    [reference, fullName, momoNumber, amount]
  );
  return rows[0];
};

exports.attachNkwaRef = async (reference, nkwaRef) => {
  await db.query(
    `UPDATE payments SET nkwa_ref=$1, updated_at=NOW() WHERE reference=$2`,
    [nkwaRef, reference]
  );
};

exports.updateStatus = async (nkwaRef, status) => {
  await db.query(
    `UPDATE payments SET status=$1, updated_at=NOW() WHERE nkwa_ref=$2`,
    [status, nkwaRef]
  );
};

exports.findAll = async () => {
  const { rows } = await db.query('SELECT * FROM payments ORDER BY created_at DESC');
  return rows;
};
