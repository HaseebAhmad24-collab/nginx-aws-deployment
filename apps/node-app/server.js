const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Node.js App - Running on port 3000</h1>');
}).listen(3000);
