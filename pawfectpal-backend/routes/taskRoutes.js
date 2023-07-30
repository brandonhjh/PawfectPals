const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authentication');
const database = require('../server');


// GET TASK from the database
router.get('/GET/api/task', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  console.log(userId);
  const tasksRef = database.ref(`tasks/${userId}`);
  tasksRef.on('value', (snapshot) => {
    const tasks = snapshot.val();
    res.json(tasks);
  }, (error) => {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// POST TASK to the database
router.post('/POST/api/addTask', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const taskData = req.body.taskData; // Assuming the task data is provided in the request body
  const tasksRef = database.ref(`tasks/${userId}`);
  const newTaskRef = tasksRef.push(); // Use push to generate a new reference with a unique key
  const newTaskKey = newTaskRef.key; // Get the unique key generated by push

  newTaskRef.set(taskData) // Use set() from the newTaskRef to save the data at the specified reference
    .then(() => {
      res.json({ message: 'Task created successfully', taskId: newTaskKey });
    })
    .catch((error) => {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
