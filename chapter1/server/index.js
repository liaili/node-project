const http = require('http');

 http.createServer((req, res) => {
   if (req.url === '/favicon.ico') {
    res.writeHead(200);
    res.end();
    return;
   }

   console.log(req.url);
   res.writeHead(200);
   res.end('hello');
 })
 .listen(3000)