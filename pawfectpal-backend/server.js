const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const groupRoutes = require('./routes/groupRoutes');

// import database from config
const database = require('./config/database');

// const firebase = require('firebase/app');
// const petRoutes = require('./petRoutes');
// const taskRoutes = require('./taskRoutes');
// const { getDatabase, onValue, ref, set: databaseSet, push, set, child } = require('firebase-admin/database');
// const { executeQueries, addDataToFirebase } = require('./firebaseData');
// const { auth } = require('./firebaseIndex');
// const { getAuth, verifyIdToken } = require("firebase-admin/auth");
// const admin = require("firebase-admin");
// const { authenticateUser } = require('./middleware/authentication')
// const { getIdToken } = require('firebase/auth');
// import { initializeApp } from "firebase-admin/app";
// const serviceAccount = require("./config/serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app"
// });
// const auth = admin.auth();


const app = express();

app.use(bodyParser.json());
app.use(cors());

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAbp9cWuGC7WDSt7Q19hwDuwUVEe6YHs4Q",
//   authDomain: "pawfect-pals-da18a.firebaseapp.com",
//   databaseURL: "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "pawfect-pals-da18a",
//   storageBucket: "pawfect-pals-da18a.appspot.com",
//   messagingSenderId: "458110592532",
//   appId: "1:458110592532:web:13da8b1eab5a6b6a6ea901",
//   measurementId: "G-WGJQ48HVDL",
// };

// firebase.initializeApp(firebaseConfig);

// const database = getDatabase();
// const database = admin.database();

// 
app.get('/', (req, res) => {
  const groupsRef = database.ref('groups');

groupsRef.once('value')
  .then((snapshot) => {
    const groupsData = snapshot.val();
    res.send(groupsData)
  })
  .catch((error) => {
    console.error('Error retrieving data:', error);
    // Handle any errors that may occur during the data retrieval process.
  });
  // res.send('Hello, world! testing');


});


// addDataToFirebase(database);

/*
// Example usage of the middleware
app.get("/protected-route", authenticateUser, (req, res) => {
  // If the code execution reaches here, the user is authenticated
  res.json({ message: "Authenticated user" });
});

// GET TASK from the database
app.get('/GET/api/task', authenticateUser, (req, res) => {
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

// GET PET from the database
app.get('/GET/api/pet', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const petsRef = database.ref(`pets/${userId}`);
  petsRef.on('value', (snapshot) => {
    const pets = snapshot.val();
    res.json(pets);
  }, (error) => {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// // GET GROUPS from the database
// app.get('/GET/api/groups', authenticateUser, (req, res) => {
//   const userId = req.user.uid;
//   const groupsRef = database.ref(`groups/${userId}`);
//   groupsRef.on('value', (snapshot) => {
//     const groups = snapshot.val();
//     res.json(groups);
//   }, (error) => {
//     console.error('Error fetching groups:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   });
// });

// POST TASK to the database
app.post('/POST/api/addTask', authenticateUser, (req, res) => {
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

// POST PET to the database
app.post('/POST/api/addPet', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const petData = req.body.petData; // Assuming the pet data is provided in the request body
  const petsRef = database.ref(`pets/${userId}`);
  const newPetRef = petsRef.push(); // Use push to generate a new reference with a unique key
  const newPetKey = newPetRef.key; // Get the unique key generated by push

  newPetRef.set(petData) // Use set() from the newPetRef to save the data at the specified reference
    .then(() => {
      res.json({ message: 'Pet created successfully', petId: newPetKey });
    })
    .catch((error) => {
      console.error('Error creating pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// // POST GROUPS to the database
// app.post('/POST/api/addGroups', authenticateUser, (req, res) => {
//   const userId = req.user.uid;
//   const { groupKey, groupData } = req.body;
//   const groupsRef = database.ref(`groups/${userId}`);
//   const groupRef = groupsRef.child(groupKey); // Use child method to get a reference to the groupKey
  
//   groupRef.set(groupData)
//     .then(() => {
//       res.json({ message: 'Group created successfully' });
//     })
//     .catch((error) => {
//       console.error('Error creating group:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });

// PUT EDIT PET in the database
app.put('/PUT/api/editPet/:petName', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const petName = req.params.petName;
  const updatedPet = req.body;
  const petsRef = database.ref(`pets/${userId}`);
  const petRef = petsRef.child(petName); // Assuming petName is the key of the pet to be updated

  petRef.update(updatedPet)
    .then(() => {
      res.json({ message: 'Pet updated successfully' });
    })
    .catch((error) => {
      console.error('Error updating pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


// // PUT JOIN GROUP in the database
// app.put('/PUT/api/joinGroup/:groupId', authenticateUser, (req, res) => {
//   const userId = req.user.uid;
//   const groupId = req.params.groupId;
//   const { username } = req.body;
//   const groupUserRef = database.ref(`groups/${groupId}/${userId}`);

//   groupUserRef.update({ [username]: true })
//     .then(() => {
//       res.json({ message: 'User joined the group successfully' });
//     })
//     .catch((error) => {
//       console.error('Error joining the group:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });
*/

// Mount the route handlers
app.use('/api/group', groupRoutes);
// app.use('/', petRoutes);
// app.use('/', taskRoutes);



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error('Uncaught Error:', err);
  res.status(500).json({ error: err.message });
});

// module.exports = database;