const express = require('express');
const router = express.Router();
const database = require('../config/database');

// GET TASK from the database
router.get('/GET/api/task', (req, res) => {
  const tasksRef = database.ref('tasks');
  tasksRef.on('value', (snapshot) => {
    const tasks = snapshot.val();
    res.json(tasks);
  }, (error) => {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// POST TASK to the database
router.post('/POST/api/addTask', (req, res) => {
  const taskData = req.body;
  const title = taskData.Title; // Assuming Title is provided in the request body

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const tasksRef = database.ref('tasks');

  // Check if a task with the given Title already exists
  tasksRef.orderByChild('Title').equalTo(title).once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        return res.status(409).json({ error: 'Task with the same title already exists' });
      }

      // Title is unique, so we can set the data with Title as the key
      tasksRef.child(title).set(taskData)
        .then(() => {
          res.json({ message: 'Task created successfully', title: title });
        })
        .catch((error) => {
          console.error('Error creating task:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    })
    .catch((error) => {
      console.error('Error checking task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// // PUT TASK to update CheckedCompleted status
// router.put('/PUT/api/task/:title', (req, res) => {
//   const title = req.params.title; // Assuming you use Title as the key
//   const newCheckedCompleted = req.body.CheckedCompleted;

//   if (newCheckedCompleted === undefined) {
//     return res.status(400).json({ error: 'CheckedCompleted value is required' });
//   }

//   const tasksRef = database.ref('tasks');

//   // Update the CheckedCompleted status
//   tasksRef.child(title).update({ CheckedCompleted: newCheckedCompleted })
//     .then(() => {
//       return res.json({ message: 'Task updated successfully', title: title });
//     })
//     .catch((error) => {
//       console.error('Error updating task:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     });
// });

module.exports = router;