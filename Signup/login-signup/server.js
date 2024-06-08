const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'testuser' && password === 'password123') {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
