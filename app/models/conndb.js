var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  port: 3306
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database connected ..');
});

module.exports = conn;
