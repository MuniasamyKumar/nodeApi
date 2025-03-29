const mysql = require('mysql2');

const db = mysql.createPool({
  connectionLimit: 10,  
  host: 'mysql.railway.internal',
  port: 3306,
  user: 'root',
  password: 'YnBNDZNHCIZKyvQERUcCWjpfpWdjuiCd',
  database: 'railway',
  waitForConnections: true,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("⛔ Database connection failed:", err);
    return;
  }
  console.log("✅ Database connected successfully");
  connection.release();
});

module.exports = db;
