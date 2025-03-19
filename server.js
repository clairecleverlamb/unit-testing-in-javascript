const express = require('express');
const app = express();
const User = require('./models/user');

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ user });
    } catch (error) {
        res.json({ error: error.message });
    }
});

const server = app.listen(3000, () => {
    console.log('The express app is ready!');
});

module.exports = server;