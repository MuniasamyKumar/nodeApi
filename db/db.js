const mysql = require('mysql2');

const db = mysql.createPool({  // Use createPool instead of createConnection
  host: "127.0.0.1",
  user: "root",
  password: "1909",
  database: "address",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Database connected successfully");
  connection.release();  // Release connection after checking
});


module.exports = db;
