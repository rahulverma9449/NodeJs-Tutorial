const http = require('http');
const Data = require('./index');

//2. Create Server.

const server = http.createServer((req, res) => {
    // Here comes the request.
    res.end('Welcome to NodeJS Ninja Server');
});

// 3. Specify a port to listen to client's requests.

server.listen(3100);

console.log('Server is listing on port 3100');