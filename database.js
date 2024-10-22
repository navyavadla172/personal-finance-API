const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a new database file in the current directory
const dbPath = path.join(__dirname, 'finance.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create tables if they do not exist
        db.run(`CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            category TEXT NOT NULL,
            amount REAL NOT NULL,
            date TEXT NOT NULL,
            description TEXT
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL
        )`);
    }
});

// Export the database object
module.exports = db;
