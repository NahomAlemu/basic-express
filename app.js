/* global process */

const express = require('express');
const app = express();

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

// Handle 404
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});
