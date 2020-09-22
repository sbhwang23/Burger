const mysql = require("mysql");
let db;

if (process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL);
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sarah1198",
    database: "burgers_db"
});

db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});
}

module.exports = db;