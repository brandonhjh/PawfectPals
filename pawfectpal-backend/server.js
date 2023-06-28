// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

// Create an Express application
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello, world! testing');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



//// database

// Create a connection pool for the MySQL database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'heap23',
});

/*
// Define an API endpoint to retrieve a name from the database
app.get('/api/tasks', (req, res) => {
    const query = 'SELECT username FROM user LIMIT 1'; // Assuming you have a 'user' table with a 'username' column
    // Execute the query
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting connection from the pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      connection.query(query, (err, results) => {
        connection.release(); // Release the connection back to the pool
        if (err) {
          console.error('Error executing the query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        if (results.length === 0) {
          res.status(404).json({ error: 'Name not found' });
          return;
        }
        const name = results[0].username;
        res.json({ name });
      });
    });
  });
*/

// Define an API endpoint to retrieve tasks from the database
app.get('/api/tasks', (req, res) => {
  const query = 'SELECT * FROM task'; // Select all columns from the 'task' table
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      const indentedJson = JSON.stringify(results, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(indentedJson);
    });
  });
});
