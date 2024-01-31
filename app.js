/* global process */

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get(/^\/(admin|user)\/(.+)$/, (req, res) => {
    const role = req.params[0];
    const path = req.params[1];
    res.send(`Role: ${role}, Path: ${path}`);
});

app.get('/get', (req, res) => {
    console.log(req.query);
    res.send('Query string data received');
 });

// First route handler for /foo
app.get('/foo', (req, res, next) => {
    if (Math.random() > 0.5) {
        res.send('sometimes this');
    } else {
        next();
    }
});

// Second route handler for /foo
app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dog-breeds.html'));
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});
