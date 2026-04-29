process.env.NODE_ENV = 'production';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`THM Website running on http://localhost:${PORT}`);
});
