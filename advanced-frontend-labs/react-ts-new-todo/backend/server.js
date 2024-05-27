const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const db = require('./database');

const app = express();
const port = 3001;

app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// CRUD operations for 'status'

// Create a new status
app.post('/status', (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO status (name) VALUES (?)', [name], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
});

// Read all statuses
app.get('/statuses', (req, res) => {
    db.all('SELECT * FROM status', [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Update a status
app.put('/status/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.run('UPDATE status SET name = ? WHERE id = ?', [name, id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Delete a status
app.delete('/status/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM status WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Get the next ID of the status table
app.post('/status/next-id', (req, res) => {
    db.run('INSERT INTO status (name) VALUES (?)', [''], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const nextId = this.lastID;
        // Clean up the placeholder entry
        db.run('DELETE FROM status WHERE id = ?', [nextId], (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
            res.json({ nextId });
        });
    });
});

// CRUD operations for 'deal'

// Create a new deal
app.post('/deal', (req, res) => {
    const { date, text, statusId } = req.body;
    db.run('INSERT INTO deal (date, text, statusId) VALUES (?, ?, ?)', [date, text, statusId], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
});

// Read all deals
app.get('/deals', (req, res) => {
    db.all('SELECT * FROM deal', [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Update a deal
app.put('/deal/:id', (req, res) => {
    const { id } = req.params;
    const { date, text, statusId } = req.body;
    db.run('UPDATE deal SET date = ?, text = ?, statusId = ? WHERE id = ?', [date, text, statusId, id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Delete a deal
app.delete('/deal/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM deal WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ changes: this.changes });
    });
});

// Get the next ID of the deal table
app.post('/deal/next-id', (req, res) => {
    db.run('INSERT INTO deal (date, text, statusId) VALUES (?, ?, ?)', ['', '', 0], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const nextId = this.lastID;
        // Clean up the placeholder entry
        db.run('DELETE FROM deal WHERE id = ?', [nextId], (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
            res.json({ nextId });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});