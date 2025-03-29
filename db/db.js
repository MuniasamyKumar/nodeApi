const mysql = require('mysql2');

const db = mysql.createPool({
 connectionLimit: 10,  
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,  
  waitForConnections: true,
  queueLimit: 0,
  ssl: { rejectUnauthorized: false }
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("⛔ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL on Railway");
  connection.release();
});

module.exports = db;
