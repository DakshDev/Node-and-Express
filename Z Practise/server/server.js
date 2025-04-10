import http from "http";
import fs from "fs";
import path from "path";


// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the CORS headers to allow requests from different origins
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the allowed origin here
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // 204 No Content response, indicating successful preflight
        return res.end();
    }

    // If it's a POST request to the root path
    if (req.method === 'POST' && req.url === '/') {
        let body = '';

        // Collect data from the request
        req.on('data', chunk => {
            body += chunk;
        });


        req.on('end', () => {
            // Parse the incoming JSON message
            console.log(body);
            const data = JSON.parse(body);

            // Log the message to the console
            console.log('Received message:', data.message);

            // Send a response back to the client
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'Message received successfully!' }));
        });
    } else {
        // If not a POST request, serve the HTML file
        if (req.url === '/') {
            fs.readFile(path.join(import.meta.dirname, 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error loading page');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        } else {
            // For other requests, return a 404
            res.writeHead(404);
            res.end('Not Found');
        }
    }
});

// Start the server on port 8080
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
