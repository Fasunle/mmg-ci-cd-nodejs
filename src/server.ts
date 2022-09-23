import express from 'express';

// variables
const PORT = process.env.NODE_PORT || 5000;
const app = express();

// API
app.get('/hello', (req, res) => {
    const date = new Date();
    res.send({
        greetings: "Hello world",
        date: date.toISOString()
    });
});

// start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));