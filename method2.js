import mysql from "mysql2/promise";

const DB_CONNECTION = async () => {
  try {
    // Create a connection to the MySQL database using promise-based mysql2
    const db = await mysql.createConnection({
      host: "localhost", // Hostname of the database server
      port: "3306", // Port number of the database server
      user: "root", // Username to connect to the database
      password: "", // Password to connect to the database
      database: "school", // Name of the database to use
    });

    console.log("DB Connected");

    // SQL query to select name and age from student_data table where age is greater than 14
    const sqlQuery = "SELECT name, age FROM student_data WHERE age > 14";

    // Execute the SQL query and get the result
    const [rows, fields] = await db.query(sqlQuery);

    // Log the result
    console.log(rows);

    // Optionally, close the database connection
    await db.end();
  } catch (error) {
    // Log any errors that occur during the connection or query execution
    console.log(error);
  }
};

// Call the function to execute the database operations
DB_CONNECTION();
