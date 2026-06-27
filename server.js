// Set environment to production mode
process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Configuration constants
const PORT = 3002;
const STATS_FILE = path.join(__dirname, 'public', 'stats.json');

// Live stats endpoint — Cache-Control: no-store prevents Cloudflare from caching it
app.get('/api/stats', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  try {
    const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    res.json(stats);
  } catch {
    res.status(503).json({ error: 'stats unavailable' });
  }
});

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
