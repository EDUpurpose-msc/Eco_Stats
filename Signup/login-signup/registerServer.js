const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; 

app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  res.status(201).json({ message: 'Registration successful!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
