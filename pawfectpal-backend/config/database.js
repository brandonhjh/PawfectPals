const admin = require('./admin');

const database = admin.database();

// some test code to check if database is working
// const groupsRef = database.ref('/groups');
// groupsRef.once('value')
//   .then((snapshot) => {
//     const groupsData = snapshot.val();
//     console.log(groupsData);
//   })
//   .catch((error) => {
//     console.error('Error retrieving data:', error);
//   });

module.exports = database;