const express = require('express');
const app = express();
const port = process.env.PORT = 3000;

// Middleware
app.use(express.json());

// Get root
app.get('/', (req, res) => {
    console.log("Welcome !");
    res.send("Welcome !");
});

// Listening
app.listen(port, () => console.log(`Listening on port ${port}...`));