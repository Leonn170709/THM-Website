// Set environment to production mode
process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const app = express();

// Configuration constants
const PORT = 3002;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Initialize server with retry on EADDRINUSE
function startServer(port, attempt = 1, maxAttempts = 5, delayMs = 1000) {
  const server = app.listen(port, () => {
    console.log(`THM Website running on http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attempt < maxAttempts) {
      console.warn(`Port ${port} in use, retrying in ${delayMs}ms... (attempt ${attempt}/${maxAttempts})`);
      setTimeout(() => startServer(port, attempt + 1, maxAttempts, delayMs * 2), delayMs);
    } else {
      console.error(`Failed to bind port ${port} after ${attempt} attempt(s):`, err.message);
      process.exit(1);
    }
  });
}

startServer(PORT);
