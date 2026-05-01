// Set environment to production mode
process.env.NODE_ENV = 'production';

const express = require('express');
const basicAuth = require('basic-auth'); // Import basic-auth library
const path = require('path');
const app = express();

// Configuration constants
const PORT = 3002;

// --- Basic Authentication Configuration ---
// IMPORTANT: Change these to strong, environment-variable-based credentials for production!
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'password'; 

// Basic Authentication Middleware
const auth = (req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials || credentials.name !== ADMIN_USER || credentials.pass !== ADMIN_PASS) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Dashboard"');
    return res.status(401).send('Authentication required.');
  }
  next();
};

// Simple in-memory storage for analytics
// Note: These reset if the server restarts. Use a database for long-term storage.
const stats = {
  totalVisits: 0,
  uniqueIPs: new Set(),
  ips: {},
  paths: {},
  startTime: Date.now()
};

// Analytics Middleware: Tracks every request that isn't a static file or API call
app.use((req, res, next) => {
  const isFile = path.extname(req.path); // Skip images, css, js files
  const isApi = req.path.startsWith('/api');

  if (!isFile && !isApi) {
    stats.totalVisits++;
    stats.uniqueIPs.add(req.ip);
    stats.ips[req.ip] = (stats.ips[req.ip] || 0) + 1;
    stats.paths[req.path] = (stats.paths[req.path] || 0) + 1;
  }
  next();
});

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Dashboard UI Route (protected)
app.get('/dashboard', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API Endpoint: Returns current traffic data as JSON (protected)
app.get('/api/stats', auth, (req, res) => {
  res.json({
    totalVisits: stats.totalVisits,
    uniqueVisitors: stats.uniqueIPs.size,
    topIPs: stats.ips,
    topPaths: stats.paths,
    uptime: Math.floor((Date.now() - stats.startTime) / 1000) // seconds
  });
});

// Initialize server
app.listen(PORT, () => {
  console.log(`THM Website running on http://localhost:${PORT}`);
});
