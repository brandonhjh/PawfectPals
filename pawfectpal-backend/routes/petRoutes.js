//************************************************************************ */
const express = require('express');
const router = express.Router();
const database = require('../config/database');

// GET pet from the database
router.get('/GET/api/pet', (req, res) => {
  const petsRef = database.ref('pets');
  petsRef.on('value', (snapshot) => {
    const pets = snapshot.val();
    res.json(pets);
  }, (error) => {
    console.error('Error fetching pets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// POST pet to the database, identify by "PetName"
router.post('/POST/api/addPet', (req, res) => {
  const petData = req.body; // Assuming the pet data is provided in the request body
  const petName = petData.PetName; // Assuming PetName is provided in the request body

  if (!petName) {
    return res.status(400).json({ error: 'PetName is required' });
  }

  const petsRef = database.ref('pets');

  // Check if the pet with the given PetName already exists
  petsRef.orderByChild('PetName').equalTo(petName).once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        return res.status(409).json({ error: 'Pet with the same name already exists' });
      }

      // PetName is unique, so we can set the data with PetName as the key
      petsRef.child(petName).set(petData)
        .then(() => {
          res.json({ message: 'Pet created successfully', petName: petName });
        })
        .catch((error) => {
          console.error('Error creating pet:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    })
    .catch((error) => {
      console.error('Error checking pet:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// *******************************************************************************
// OLD POST request, which generates unique key to identify pet. For simplicity i used PetName 
/*
  router.post('/POST/api/addPet', (req, res) => {
  const petData = req.body; // Assuming the pet data is provided in the request body
  const petsRef = database.ref('pets');
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
*/
// *******************************************************************************

// PUT pet in the database
router.put('/PUT/api/editPet/:petName', (req, res) => {
  const petName = req.params.petName;
  const updatedPet = req.body;
  const petsRef = database.ref('pets');
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

module.exports = router;
