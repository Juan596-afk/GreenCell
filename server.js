const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = [];

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.json({ message: 'User already exists' });
  }
  users.push({ name, email, password });
  res.json({ message: 'Sign up successful' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const found = users.find(user => user.email === email && user.password === password);
  if (found) {
    res.json({ message: 'Login successful' });
  } else {
    res.json({ message: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});