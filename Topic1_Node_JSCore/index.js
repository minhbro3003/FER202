//console.log('Hello World');


// tao ra 1 cai web server 
const http = require('http');
const hostname = '127.0.0.1';
const port = '3000';
const server = http.createServer((req, res) => {
    console.log('Request: ', req.url);

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<h1>Hello FPT University</h1>');
})
server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});