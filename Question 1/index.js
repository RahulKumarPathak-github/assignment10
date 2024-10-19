// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header content type to plain text
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body
    res.end('Hello, Students!\n');
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});        
