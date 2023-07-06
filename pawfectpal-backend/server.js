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

// GET TASK from the database
app.get('/GET/api/task', (req, res) => {
  const query = 'SELECT * FROM task'; // Select all columns from the 'task' table
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      //const resultsRow = results[0];  // <== note: this is to return first row of data
      //const resultsAttribute = results[0].taskID;  // <== note: this returns the specific attribute
      const jsonString = JSON.stringify(results, null, 2); // Indent with 2 spaces
      res.setHeader('Content-Type', 'application/json');
      res.send(jsonString); // Send the query results as the JSON response with indentation
    });
  });
});


// GET PET from the database
app.get('/GET/api/pet', (req, res) => {
  const query = 'SELECT * FROM pet'; // Select all columns from the 'pet' table
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      //const resultsRow = results[0];  // <== note: this is to return first row of data
      //const resultsAttribute = results[0].taskID;  // <== note: this returns the specific attribute
      const jsonString = JSON.stringify(results, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(jsonString);
    });
  });
});

// GET GROUPS from the database
app.get('/GET/api/groups', (req, res) => {
  const query = 'SELECT * FROM groups'; // Select all columns from the 'groups' table
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      //const resultsRow = results[0];  // <== note: this is to return first row of data
      //const resultsAttribute = results[0].taskID;  // <== note: this returns the specific attribute
      const jsonString = JSON.stringify(results, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(jsonString);
    });
  });
});


// POST TASK to the database
app.post('/POST/api/addTask', (req, res) => {
  const task = req.body; // Get the task data from the request body
  // Construct the SQL query to insert the new task into the table
  const query = `
    INSERT INTO task (taskID, groupID, taskDate, taskTime, petName, title, notes, isCompleted, people)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
  `;
  // //VALUES (${task.taskID}, ${task.groupID}, '${task.taskDate}', '${task.taskTime}', '${task.petName}', '${task.title}', '${task.notes}', ${task.isCompleted}, '${task.people}')
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      res.json({ message: 'Task created successfully' });
    });
  });
});

// POST PET to the database
app.post('/POST/api/addPet', (req, res) => {
  const pet = req.body; // Get the pet data from the request body
  // Construct the SQL query to insert the new pet into the table
  const query = `
    INSERT INTO pet (petName, groupID, breed, birthday, petPicture)
    VALUES (?, ?, ?, ?, ?)
  `;
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      res.json({ message: 'Pet created successfully' });
    });
  });
});

// POST GROUPS to the database
app.post('/POST/api/addGroups', (req, res) => {
  const group = req.body; // Get the group data from the request body
  // Construct the SQL query to insert the new group into the table
  const query = `
    INSERT INTO groups (groupID, groupName)
    VALUES (?, ?)
  `;
  // Execute the query
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from the pool:', err);
      res.status(500).json({ error: 'Internal Server Error heh1' });
      return;
    }
    connection.query(query, (err, results) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Internal Server Error heh2' });
        return;
      }
      res.json({ message: 'Group created successfully' });
    });
  });
});