const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const db = new sqlite3.Database('../gpt-backend/database.sqlite');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create the users table if it does not exist yet.
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      login TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

// User registration.
app.post('/register', (req, res) => {
  const { login, password } = req.body;
  const query = 'INSERT INTO users (login, password) VALUES (?, ?)';

  // Only the bcrypt hash is stored; the plain-text password never reaches the database.
  bcrypt.hash(password, 10, (hashErr, hash) => {
    if (hashErr) {
      return res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
    }
    db.run(query, [login, hash], (err) => {
      if (err) {
        return res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
      }
      res.status(200).json({ message: 'Регистрация успешна' });
    });
  });
});

// User login.
app.post('/login', (req, res) => {
  const { login, password } = req.body;
  const query = 'SELECT * FROM users WHERE login = ?';

  // Look the user up by login, then verify the password against the stored hash.
  db.get(query, [login], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при авторизации пользователя' });
    }
    if (!row) {
      return res.status(400).json({ error: 'Неверный логин или пароль' });
    }
    bcrypt.compare(password, row.password, (cmpErr, ok) => {
      if (cmpErr) {
        return res.status(500).json({ error: 'Ошибка при авторизации пользователя' });
      }
      if (ok) {
        res.status(200).json({ message: 'Авторизация успешна' });
      } else {
        res.status(400).json({ error: 'Неверный логин или пароль' });
      }
    });
  });
});

// Static files for the React app.
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve index.html for every other route.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});