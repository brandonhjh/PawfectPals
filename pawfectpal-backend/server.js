const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const groupRoutes = require('./routes/groupRoutes');
const petRoutes = require('./routes/petRoutes');
const taskRoutes = require('./routes/taskRoutes');

// import database from config
const database = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Mount the route handlers
app.use('/', groupRoutes);
app.use('/', petRoutes);
app.use('/', taskRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error('Uncaught Error:', err);
  res.status(500).json({ error: err.message });
});