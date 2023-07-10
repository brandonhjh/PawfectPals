const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/database');

const { getDatabase, onValue, ref, set: databaseSet, push, set, child } = require('firebase/database');
const { executeQueries, addDataToFirebase } = require('./firebaseData');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbp9cWuGC7WDSt7Q19hwDuwUVEe6YHs4Q",
  authDomain: "pawfect-pals-da18a.firebaseapp.com",
  databaseURL: "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pawfect-pals-da18a",
  storageBucket: "pawfect-pals-da18a.appspot.com",
  messagingSenderId: "458110592532",
  appId: "1:458110592532:web:13da8b1eab5a6b6a6ea901",
  measurementId: "G-WGJQ48HVDL",
};

firebase.initializeApp(firebaseConfig);

const database = getDatabase();

app.get('/', (req, res) => {
  res.send('Hello, world! testing');
});

// addDataToFirebase(database);

// GET TASK from the database
app.get('/GET/api/task', (req, res) => {
  const tasksRef = ref(database, 'tasks');
  onValue(tasksRef, (snapshot) => {
    const tasks = snapshot.val();
    res.json(tasks);
  }, (error) => {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// GET PET from the database
app.get('/GET/api/pet', (req, res) => {
  const petsRef = ref(database, 'pets');
  onValue(petsRef, (snapshot) => {
    const pets = snapshot.val();
    res.json(pets);
  }, (error) => {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// GET GROUPS from the database
app.get('/GET/api/groups', (req, res) => {
  const groupsRef = ref(database, 'groups');
  onValue(groupsRef, (snapshot) => {
    const groups = snapshot.val();
    res.json(groups);
  }, (error) => {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// POST TASK to the database
app.post('/POST/api/addTask', (req, res) => {
  const taskKey = req.body.taskKey; // Assuming the custom key is provided in the request body
  const taskData = req.body.taskData; // Assuming the task data is provided in the request body

  const tasksRef = ref(database, 'tasks');
  const taskRef = child(tasksRef, taskKey);
  set(taskRef, taskData)
    .then(() => {
      res.json({ message: 'Task created successfully' });
    })
    .catch((error) => {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


// POST PET to the database
app.post('/POST/api/addPet', (req, res) => {
  const petKey = req.body.petKey; // Assuming the custom key is provided in the request body
  const petData = req.body.petData; // Assuming the pet data is provided in the request body

  const petsRef = ref(database, 'pets');
  const petRef = child(petsRef, petKey);
  set(petRef, petData)
    .then(() => {
      res.json({ message: 'Pet created successfully' });
    })
    .catch((error) => {
      console.error('Error creating pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


// POST GROUPS to the database
app.post('/POST/api/addGroups', (req, res) => {
  const { groupKey, groupData } = req.body;
  const groupsRef = ref(database, 'groups');
  const groupRef = child(groupsRef, groupKey);
  set(groupRef, groupData)
    .then(() => {
      res.json({ message: 'Group created successfully' });
    })
    .catch((error) => {
      console.error('Error creating group:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// :petName is a URL parameter representing the name of the pet being edited
// PUT EDIT PET in the database
app.put('/PUT/api/editPet/:petName', (req, res) => {
  const petName = req.params.petName;
  const updatedPet = req.body;

  const petRef = child(ref(database, 'pets'), petName);
  set(petRef, updatedPet)
    .then(() => {
      res.json({ message: 'Pet updated successfully' });
    })
    .catch((error) => {
      console.error('Error updating pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// PUT JOIN GROUP in the database
app.put('/PUT/api/joinGroup/:groupId', (req, res) => {
  const groupId = req.params.groupId;
  const { username } = req.body;

  const groupsRef = ref(database, `groups/${groupId}`);
  const userRef = child(groupsRef, username);
  set(userRef, true)
    .then(() => {
      res.json({ message: 'User joined the group successfully' });
    })
    .catch((error) => {
      console.error('Error joining the group:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});