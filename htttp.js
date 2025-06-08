const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`
        <h1>Hello World</h1>
        <p>Welcome to my Node.js server!</p>
        <p>Current Date and Time: ${new Date().toLocaleString()}</p>
        <p>Request Method: ${req.method}</p>
        `);
});

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
}); 