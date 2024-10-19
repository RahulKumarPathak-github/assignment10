const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header content type to plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Handle different routes
    if (req.url === '/') {
        // Respond with "Hello, World!" for the root route ("/")
        res.end('Hello, World!\n');
    } else {
        // Respond with "Page Not Found" for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
    }
});

// Define the port the server will listen to
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
