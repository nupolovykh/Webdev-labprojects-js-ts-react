const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Open a database connection
const db = new sqlite3.Database(path.resolve(__dirname, 'database.db'), (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create tables
        db.serialize(() => {
            db.run(`
                CREATE TABLE IF NOT EXISTS status (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL
                )
            `);

            db.run(`
                CREATE TABLE IF NOT EXISTS deal (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    date TEXT NOT NULL,
                    text TEXT NOT NULL,
                    statusId INTEGER,
                    FOREIGN KEY (statusId) REFERENCES status(id)
                )
            `);

            db.all(`SELECT * FROM status`, [], (err, rows) => {
                if (rows.length == 0) {
                    // Insert initial data into status table
                    db.run(`INSERT INTO status (name) VALUES ('Pending')`);
                    db.run(`INSERT INTO status (name) VALUES ('In Progress')`);
                    db.run(`INSERT INTO status (name) VALUES ('Completed')`);
                }
            });

            db.all(`SELECT * FROM deal`, [], (err, rows) => {
                if (rows.length == 0) {
                    // Insert initial data into deal table
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-01', 'Deal 1', 1)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-02', 'Deal 2', 2)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-03', 'Deal 3', 3)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-04', 'Deal 4', 1)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-05', 'Deal 5', 2)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-06', 'Deal 6', 3)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-07', 'Deal 7', 1)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-08', 'Deal 8', 2)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-09', 'Deal 9', 3)`);
                    db.run(`INSERT INTO deal (date, text, statusId) VALUES ('2024-05-10', 'Deal 10', 1)`);
                }
            });
        });
    }
});

module.exports = db;