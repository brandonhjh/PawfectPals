const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const groupRoutes = require('./routes/groupRoutes');
const petRoutes = require('./routes/petRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Mount the route handlers
//app.use('/', groupRoutes);      // skip for now
app.use('/', petRoutes);
app.use('/', taskRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port} hehe`);
});

app.use((err, req, res, next) => {
  console.error('Uncaught Error:', err);
  res.status(500).json({ error: err.message });
});