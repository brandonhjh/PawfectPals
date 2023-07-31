const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authentication');
const database = require('../config/database');

// GET GROUPS from the database
router.get('/', (req, res) => {
  const userId = "test"
  const groupsRef = database.ref(`groups`);
  groupsRef.on('value', (snapshot) => {
    const groups = snapshot.val();
    res.json(groups);
  }, (error) => {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// POST GROUPS to the database
router.post('/POST/api/addGroups', authenticateUser, (req, res) => {
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

// PUT JOIN GROUP in the database
router.put('/PUT/api/joinGroup/:groupId', authenticateUser, (req, res) => {
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

module.exports = router;
