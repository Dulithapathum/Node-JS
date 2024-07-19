// Import the createConnection function from the mysql2 package
import { createConnection } from "mysql2";

// Create a connection to the MySQL database
const db = createConnection({
  host: "localhost", // Hostname of the database server
  port: "3306", // Port number of the database server
  user: "root", // Username to connect to the database
  password: "", // Password to connect to the database
  database: "school", // Name of the database to use
});

// Connect to the database
db.connect((error) => {
  if (error) {
    // If there is an error during connection, log the error
    console.log(error);
  } else {
    // If the connection is successful, log a success message
    console.log("DB Connected");
  }
});

// SQL query to select name and age from student_data table where age is greater than 14
const sqlQuery = "SELECT name, age FROM student_data WHERE age > 14";

// Execute the SQL query
db.query(sqlQuery, (err, result) => {
  if (err) {
    // If there is an error during the query execution, log the error
    console.log(err);
  } else {
    // If the query is successful, log the result
    console.log(result);
  }
});

// db.end();

// SQL statement to create a new table called marks
const addTable =
  "CREATE TABLE marks ( id INT AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY(id))";

// Uncomment the block below to create the marks table
db.query(addTable, (err, result) => {
  if (err) {
    // If there is an error during the table creation, log the error
    console.log(err);
  } else {
    // If the table is created successfully, log the result
    console.log(result);
  }
});

// SQL query to select all data from the marks table
const getMark = "SELECT * FROM marks";

// Uncomment the block below to query data from the marks table
db.query(getMark, (err, result) => {
  if (err) {
    // If there is an error during the query execution, log the error
    console.log(err);
  } else {
    // If the query is successful, log the result
    console.log(result);
  }
});
