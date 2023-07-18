const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase-admin/database');

const { getDatabase, onValue, ref, set: databaseSet, push, set, child } = require('firebase-admin/database');
const { executeQueries, addDataToFirebase } = require('./firebaseData');

const { auth } = require('./firebaseIndex');
const { getAuth, verifyIdToken } = require("firebase-admin/auth");

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
const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE0ZWI4YTNiNjgzN2Y2MTU4ZWViNjA3NmU2YThjNDI4YTVmNjJhN2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGF3ZmVjdC1wYWxzLWRhMThhIiwiYXVkIjoicGF3ZmVjdC1wYWxzLWRhMThhIiwiYXV0aF90aW1lIjoxNjg5NjcwNTQ5LCJ1c2VyX2lkIjoiUUlxdFJJWG9aNVpzOGlSQUtxdU1mSE9sZUh6MSIsInN1YiI6IlFJcXRSSVhvWjVaczhpUkFLcXVNZkhPbGVIejEiLCJpYXQiOjE2ODk2NzA1NDksImV4cCI6MTY4OTY3NDE0OSwiZW1haWwiOiJxaWppZUB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJxaWppZUB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.muPDtv0MjafxQZs4JSUo99lBdunn4MAcvwMN3DqPFHS-SVvM-kTdvkZjVZwLlf1YcZlNegRxyfPCxj73MQqWXgT6Lg4gvJhiOTeU43IWADLtgRDWN6Pxm1OJZmvnxbI2Kk81vLn8gMOwxyqAVZ2btwFkciUVKB5WOJsJDt6Bk_c8TriAct9-gfKRWn8x_zkfEC4sLCJlTMftWn0FSp5fI81X-d4whi1xTD1XWri0RCq5HcBI7iCC4NzKELdNvNKaKwJCAR4JH3wAmmMrTXFcxWLczvIqE0zGRJEWBL4BzP5PxMCtXiVfMPgmGHxT9KSE9WhQ8EjuFd0PqUkESrrFfQ';
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

const database = getDatabase();

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
  const tasksRef = ref(database, `tasks/${userId}`);
  onValue(tasksRef, (snapshot) => {
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
  const petsRef = ref(database, `pets/${userId}`);
  onValue(petsRef, (snapshot) => {
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
  const groupsRef = ref(database, `groups/${userId}`);
  onValue(groupsRef, (snapshot) => {
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
  const taskKey = req.body.taskKey; // Assuming the custom key is provided in the request body
  const taskData = req.body.taskData; // Assuming the task data is provided in the request body

  const tasksRef = ref(database, `tasks/${userId}`);
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
