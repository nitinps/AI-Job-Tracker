const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');

// Optional: test DB connection
db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('DB connected. Time:', res.rows[0].now);
  }
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Job Tracker API is running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);