const express = require('express')
const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
    res.json({ message: 'API running' })
})

module.exports = server;