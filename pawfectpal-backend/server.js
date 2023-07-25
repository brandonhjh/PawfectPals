const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase-admin/database');

const { getDatabase, onValue, ref, set: databaseSet, push, set, child } = require('firebase-admin/database');
const { executeQueries, addDataToFirebase } = require('./firebaseData');

const { auth } = require('./firebaseIndex');
const { getAuth, verifyIdToken } = require("firebase-admin/auth");
const admin = require("firebase-admin");

const { getIdToken } = require('firebase/auth');

/* 
// Check if token works
const verifyToken = async (idToken) => {
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const { aud, iss } = decodedToken;

    // Verify the audience and issuer values
    const projectId = 'pawfect-pals-da18a';
    const expectedAudience = 'pawfect-pals-da18a';
    const expectedIssuer = `https://securetoken.google.com/${projectId}`;
    console.log(`expectedAudience: ${expectedAudience}`);
    console.log(`expectedIssuer: ${expectedIssuer}`);
    console.log(`aud: ${aud}`);
    console.log(`iss: ${iss}`);
    console.log(JSON.stringify(idToken, null, 2));
    console.log(decodedToken);
    if (aud !== expectedAudience || iss !== expectedIssuer) {
      console.error('Invalid audience or issuer');
      return;
    }
    // Audience and issuer are valid
    console.log('Audience and issuer are valid');
  } catch (error) {
    console.error('Error verifying ID token:', error);
  }
};

// Provide a valid ID token here
const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZGZmNzhhMGJkZDVhMDIyMTIwNjM0OTlkNzdlZjRkZWVkMWY2NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGF3ZmVjdC1wYWxzLWRhMThhIiwiYXVkIjoicGF3ZmVjdC1wYWxzLWRhMThhIiwiYXV0aF90aW1lIjoxNjkwMjQ3NzEyLCJ1c2VyX2lkIjoiUUlxdFJJWG9aNVpzOGlSQUtxdU1mSE9sZUh6MSIsInN1YiI6IlFJcXRSSVhvWjVaczhpUkFLcXVNZkhPbGVIejEiLCJpYXQiOjE2OTAyNDc3MTIsImV4cCI6MTY5MDI1MTMxMiwiZW1haWwiOiJxaWppZUB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJxaWppZUB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iDWzBc0rv6advj4sB0iznleOZnohwT_0cEqZ3tP9-imqI7t6BmadD8eY9u1opafmpW0fH8XlBO2pt33rm0vJ1gP6Az3kbo5nrYdo2mon6FkQFuNuvwCqE6qBZZpIrzlPPD6DRi70_G-5rDEBrSgRTrUFxGSDsJBUqEjUJBTYkgbEAjP_3SMSIQP76fKuhmLdrZSNUI8l69EUogQV0fcmwtoY90vUKDjAMZWEmMjbK9tHXsFm-VRi63D8joEJ3-XeavQyVtwbUQIVSnVlGLfxMInPI5BgiVmjLL9xvaEyWf3TOTtY-i9_WSb17ll272z85m5evGPOvUT_IJDrY0RgSw';
verifyToken(idToken);
*/

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

// const database = getDatabase();
const database = admin.database();

app.get('/', (req, res) => {
  res.send('Hello, world! testing');
});

// addDataToFirebase(database);

// Middleware to enable authentication for protected routes
const authenticateUser = (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(req.headers);
  if (!authorization || !authorization.startsWith('Bearer ')) {
    console.log('No ID token provided');
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  const idToken = authorization.split('Bearer ')[1];
  // console.log(idToken);
  auth.verifyIdToken(idToken).then((decodedToken) => {
      // console.log('ID token verified:', decodedToken);
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Error verifying ID token:', error);
      res.status(401).json({ error: 'Unauthorized' });
    });
};

// GET TASK from the database
app.get('/GET/api/task', authenticateUser, (req, res) => {
  const userId = req.user.uid;
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

// GET GROUPS from the database
app.get('/GET/api/groups', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const groupsRef = database.ref(`groups/${userId}`);
  groupsRef.on('value', (snapshot) => {
    const groups = snapshot.val();
    res.json(groups);
  }, (error) => {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

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
  const petData = req.body.petData;
  const petsRef = database.ref(`pets/${userId}`);
  const newPetRef = petsRef.push();
  const newPetKey = newPetRef.key;

  newPetRef.set(petData)
    .then(() => {
      res.json({ message: 'Pet created successfully', petId: newPetKey });
    })
    .catch((error) => {
      console.error('Error creating pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// POST GROUPS to the database
app.post('/POST/api/addGroups', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const { groupKey, groupData } = req.body;
  const groupsRef = database.ref(`groups/${userId}`);
  const groupRef = groupsRef.child(groupKey); // Use child method to get a reference to the groupKey
  
  groupRef.set(groupData)
    .then(() => {
      res.json({ message: 'Group created successfully' });
    })
    .catch((error) => {
      console.error('Error creating group:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

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


// PUT JOIN GROUP in the database
app.put('/PUT/api/joinGroup/:groupId', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const groupId = req.params.groupId;
  const { username } = req.body;
  const groupUserRef = database.ref(`groups/${groupId}/${userId}`);

  groupUserRef.update({ [username]: true })
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

app.use((err, req, res, next) => {
  console.error('Uncaught Error:', err);
  res.status(500).json({ error: err.message });
});
