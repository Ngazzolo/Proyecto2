const https = require('https');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';

const server = https.createServer({
    key:fs.readFileSync('cert.key'),
    cert: fs.readFileSync('cert.crt'),
}, (req, res) =>{
    res.statusCode = 200;
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
