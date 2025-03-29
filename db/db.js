const mysql = require('mysql2');

const db = mysql.createPool({
 connectionLimit: 10,  
  // host: process.env.DB_HOST || "caboose.proxy.rlwy.net",
  // port: process.env.DB_PORT || 3306,
  // user: process.env.DB_USER || "root",
  // password: process.env.DB_PASSWORD || "LKbIzFvEEnwpQiYDzXyLvlABgjnYuqcX",
  // database: process.env.DB_NAME || "railway",  
  waitForConnections: true,
  uri: "mysql://root:LKbIzFvEEnwpQiYDzXyLvlABgjnYuqcX@shuttle.proxy.rlwy.net:20505/railway",
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
