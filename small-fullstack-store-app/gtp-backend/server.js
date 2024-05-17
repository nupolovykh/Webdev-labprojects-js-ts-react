const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('../gtp-backend/database.sqlite');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Создаем таблицу пользователей, если ее нет
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      login TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

// Регистрация пользователя
app.post('/register', (req, res) => {
  const { login, password } = req.body;
  const query = 'INSERT INTO users (login, password) VALUES (?, ?)';

  db.run(query, [login, password], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
    }
    res.status(200).json({ message: 'Регистрация успешна' });
  });
});

// Авторизация пользователя
app.post('/login', (req, res) => {
  const { login, password } = req.body;
  const query = 'SELECT * FROM users WHERE login = ? AND password = ?';

  db.get(query, [login, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при авторизации пользователя' });
    }
    if (row) {
      res.status(200).json({ message: 'Авторизация успешна' });
    } else {
      res.status(400).json({ error: 'Неверный логин или пароль' });
    }
  });
});

// Статические файлы для React-приложения
app.use(express.static(path.join(__dirname, 'client/build')));

// Отправка index.html для всех остальных маршрутов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});