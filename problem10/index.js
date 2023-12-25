const express = require("express");
const server = express();

// Write your code here
server.all('/', (req, res) => {
    // Handle different HTTP methods
    switch (req.method) {
        case 'GET':
            res.send('get');
            break;
        case 'POST':
            res.send('post');
            break;
        case 'PUT':
            res.send('put');
            break;
        case 'DELETE':
            res.send('delete');
            break;
        default:
            res.status(405).send('Method Not Allowed');
    }
});

module.exports = server;