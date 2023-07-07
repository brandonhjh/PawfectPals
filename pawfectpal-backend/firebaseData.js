const { getDatabase, ref, set: databaseSet } = require('firebase/database');

// Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration
};

// Initialize Firebase
const database = getDatabase();

// Function to execute database queries
function executeQueries(queries) {
  const updates = {};

  queries.forEach((query) => {
    updates[query.ref] = query.data;
  });

  return databaseSet(ref(database), updates);
}

// Function to add data to Firebase Realtime Database
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
      ref: 'pet',
      data: {
        Leo: { groupID: 100, breed: 'Husky', birthday: '2001-01-01', petPicture: null },
        Bella: { groupID: 101, breed: 'Labrador', birthday: '2015-03-10', petPicture: null },
        Max: { groupID: 101, breed: 'Golden Retriever', birthday: '2018-07-22', petPicture: null },
        Charlie: { groupID: 102, breed: 'Bulldog', birthday: '2019-01-05', petPicture: null }
      }
    },
    {
      ref: 'task',
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

module.exports = { addDataToFirebase };
