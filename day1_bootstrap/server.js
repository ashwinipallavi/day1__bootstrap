const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like HTML, JS, CSS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
