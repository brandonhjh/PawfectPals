const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/database');

const { getDatabase, onValue, ref, set: databaseSet } = require('firebase/database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbp9cWuGC7WDSt7Q19hwDuwUVEe6YHs4Q",
  authDomain: "pawfect-pals-da18a.firebaseapp.com",
  databaseURL:
    "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app",
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

function executeQueries(queries) {
  const updates = {};

  queries.forEach((query) => {
    updates[query.ref] = query.data;
  });

  return databaseSet(ref(database), updates);
}

function addDataToFirebase() {
  executeQueries([
    {
      ref: 'user',
      data: {
        brandon: { password: 'apple123', userPicture: null },
        jennifer: { password: 'orange456', userPicture: null },
        michael: { password: 'banana789', userPicture: null }
      }
    },
    {
      ref: 'groups',
      data: {
        '100': { groupName: 'Safe Space' },
        '101': { groupName: 'Study Group' },
        '102': { groupName: 'Fitness Club' }
      }
    },
    {
      ref: 'userGroup',
      data: {
        '100': { brandon: true },
        '101': { brandon: true, jennifer: true },
        '102': { michael: true, jennifer: true }
      }
    },
    {
      ref: 'pets',
      data: {
        Leo: { groupID: 100, breed: 'Husky', birthday: '2001-01-01', petPicture: null },
        Bella: { groupID: 101, breed: 'Labrador', birthday: '2015-03-10', petPicture: null },
        Max: { groupID: 101, breed: 'Golden Retriever', birthday: '2018-07-22', petPicture: null },
        Charlie: { groupID: 102, breed: 'Bulldog', birthday: '2019-01-05', petPicture: null }
      }
    },
    {
      ref: 'tasks',
      data: {
        '200': {
          groupID: 100,
          taskDate: '2023-06-15',
          taskTime: '12:00:00',
          petName: 'Leo',
          title: "Leo's dinner",
          notes: 'Remember to top up food!',
          isCompleted: false,
          people: 'brandon,jennifer'
        },
        '201': {
          groupID: 101,
          taskDate: '2023-06-16',
          taskTime: '14:30:00',
          petName: 'Bella',
          title: 'Walk in the park',
          notes: 'Take Bella for a 30-minute walk',
          isCompleted: false,
          people: 'brandon'
        },
        '202': {
          groupID: 101,
          taskDate: '2023-06-18',
          taskTime: '10:00:00',
          petName: 'Max',
          title: 'Training session',
          notes: 'Train Max on basic commands',
          isCompleted: false,
          people: 'jennifer'
        },
        '203': {
          groupID: 102,
          taskDate: '2023-06-17',
          taskTime: '16:00:00',
          petName: 'Charlie',
          title: 'Playtime at the park',
          notes: 'Spend some time playing with Charlie',
          isCompleted: false,
          people: 'michael,jennifer'
        }
      }
    },
    {
      ref: 'taskPeople',
      data: {
        '200': { groupID: 100, brandon: true, jennifer: true },
        '201': { groupID: 101, brandon: true },
        '202': { groupID: 101, jennifer: true },
        '203': { groupID: 102, michael: true, jennifer: true }
      }
    }
  ])
    .then(() => {
      console.log('Data added to Firebase Realtime Database successfully');
    })
    .catch((error) => {
      console.error('Error adding data to Firebase Realtime Database:', error);
    });
}

// Add data to Firebase Realtime Database when the server starts
addDataToFirebase();

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
  const task = req.body;
  const tasksRef = ref(database, 'tasks');
  const newTaskRef = push(tasksRef);
  set(newTaskRef, task)
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
  const pet = req.body;
  const petsRef = ref(database, 'pets');
  const newPetRef = push(petsRef);
  set(newPetRef, pet)
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
  const group = req.body;
  const groupsRef = ref(database, 'groups');
  const newGroupRef = push(groupsRef);
  set(newGroupRef, group)
    .then(() => {
      res.json({ message: 'Group created successfully' });
    })
    .catch((error) => {
      console.error('Error creating group:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
