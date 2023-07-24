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
const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZGZmNzhhMGJkZDVhMDIyMTIwNjM0OTlkNzdlZjRkZWVkMWY2NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGF3ZmVjdC1wYWxzLWRhMThhIiwiYXVkIjoicGF3ZmVjdC1wYWxzLWRhMThhIiwiYXV0aF90aW1lIjoxNjkwMTk1MjA3LCJ1c2VyX2lkIjoiUUlxdFJJWG9aNVpzOGlSQUtxdU1mSE9sZUh6MSIsInN1YiI6IlFJcXRSSVhvWjVaczhpUkFLcXVNZkhPbGVIejEiLCJpYXQiOjE2OTAxOTUyMDcsImV4cCI6MTY5MDE5ODgwNywiZW1haWwiOiJxaWppZUB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJxaWppZUB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Go9s-gk_zHCz7kJ7DPQgoSF_EbdPP7VpvpkT_3yzMnOGf-FZRpwskm8HAHK20vLLruLImkUo8J9w6e5TuRHLXEKf7p4Q0uzpWQH1r4DytAcMdiVA-H404WE8FutqwLwAAyP8MwiC0i3tYTwMe2UvfL9xU6fXcf4Jk7Kz-HU1fZ3bdoZP3zqCl0RijWhXXs59bgJWA6X9jPgNLOZl2_HcsMGp1BY1KozUOiRThU0CY-PJ3PhwbyOnrgMH68s7b2AlzxsTp1YZ3EFNmHZppEeiGx0FQRcnDnrWyKzbddE8rKfs3SVs5UnNTP25SMk0VWG9LZ7yiLDMUJ9boZTcdIMG6g';
verifyToken(idToken);

/*
////////////////////////////////////////////

// send id token in the browser
const response = await fetch(GetCookieUrl, {
  headers: new Headers({
    'Authorization': `Bearer ${idToken}`
  })
});

// verify the id token on the server
const idToken = req.header('Authorization')?.split('Bearer ')?.[1];
const decodedIdToken = await verifyIdToken(idToken, checkRevoked);

/////////////////////////////////////////////

// get the id token in the browser
const idToken = await getIdToken(auth.currentUser);
const response = await fetch(getCookieUrl, {
  headers: new Headers({
    'Authorization': `Bearer ${idToken}`
  })
});

// verify the id token on the server
const cookie = await adminAuth.createSessionCookie(idToken);
res.cookie('__session', cookie, options)

// validate a cookie on the server
const cookies = cookie.parse(req.headers.cookie);
const { __session } = cookies;
const { uid } = await adminAuth.verifySessionCookie(__session);

/////////////////////////////////////////////
*/

// Initialize Firebase
// const auth = getAuth(app);

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

  console.log(req.headers);
  if (!authorization || !authorization.startsWith('Bearer ')) {
    console.log('No ID token provided');
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const idToken = authorization.split('Bearer ')[1];
  console.log(idToken);

  auth.verifyIdToken(idToken).then((decodedToken) => {
      console.log('ID token verified:', decodedToken);
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Error verifying ID token:', error);
      res.status(401).json({ error: 'Unauthorized' });
    });
};

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

  set(newTaskRef, taskData)
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
  const petKey = req.body.petKey; // Assuming the custom key is provided in the request body
  const petData = req.body.petData; // Assuming the pet data is provided in the request body

  const petsRef = ref(database, `pets/${userId}`);
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
app.post('/POST/api/addGroups', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const { groupKey, groupData } = req.body;
  const groupsRef = ref(database, `groups/${userId}`);
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

// PUT EDIT PET in the database
app.put('/PUT/api/editPet/:petName', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const petName = req.params.petName;
  const updatedPet = req.body;

  const petRef = child(ref(database, `pets/${userId}`), petName);
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
app.put('/PUT/api/joinGroup/:groupId', authenticateUser, (req, res) => {
  const userId = req.user.uid;
  const groupId = req.params.groupId;
  const { username } = req.body;

  const groupsRef = ref(database, `groups/${groupId}/${userId}`);
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

app.use((err, req, res, next) => {
  console.error('Uncaught Error:', err);
  res.status(500).json({ error: err.message });
});
