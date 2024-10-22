const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('Personal Finance API is running!');
});

// Add a new transaction
app.post('/transactions', (req, res) => {
    const { type, category, amount, date, description } = req.body;

    // Basic validation
    if (!type || !category || !amount || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
    const params = [type, category, amount, date, description];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, type, category, amount, date, description });
    });
});

// Get all transactions
app.get('/transactions', (req, res) => {
    db.all(`SELECT * FROM transactions`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // Send back the retrieved transactions as JSON
    });
});

// Get all transactions with pagination
app.get('/transactions', (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    const page = parseInt(req.query.page) || 1; // Default page to 1
    const offset = (page - 1) * limit; // Calculate offset

    db.all(`SELECT * FROM transactions LIMIT ? OFFSET ?`, [limit, offset], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


// Get a transaction by ID
app.get('/transactions/:id', (req, res) => {
    const sql = `SELECT * FROM transactions WHERE id = ?`;
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json(row);
    });
});

// Update a transaction by ID
app.put('/transactions/:id', (req, res) => {
    const { id } = req.params;
    const { type, category, amount, date, description } = req.body;
    db.run(`UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
        [type, category, amount, date, description, id],
        function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: "Transaction not found" });
            }
            res.json({ id, type, category, amount, date, description });
        }
    );
});

// Delete a transaction by ID
app.delete('/transactions/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM transactions WHERE id = ?`, id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Transaction not found" });
        }
        res.status(204).send(); // No content
    });
});

// Get summary of transactions
app.get('/summary', (req, res) => {
    console.log('Summary endpoint hit');
    db.all(`SELECT type, SUM(amount) as total FROM transactions GROUP BY type`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const summary = {
            totalIncome: rows.find(row => row.type === 'income')?.total || 0,
            totalExpenses: rows.find(row => row.type === 'expense')?.total || 0,
            balance: (rows.find(row => row.type === 'income')?.total || 0) - (rows.find(row => row.type === 'expense')?.total || 0)
        };
        res.json(summary);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
