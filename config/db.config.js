'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'node_mysql_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;


// CREATE TABLE Users (
//   id int NOT NULL,
//   name varchar(255) NOT NULL,
//   email varchar(255),
//   dob varchar(255),
//   PRIMARY KEY (id)
// );