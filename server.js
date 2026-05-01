// Set environment to production mode
process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const app = express();

// Configuration constants
const PORT = 3002;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Initialize server
app.listen(PORT, () => {
  console.log(`THM Website running on http://localhost:${PORT}`);
});
