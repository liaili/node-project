const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');
const game = require('./game');

let playwon = 0;

http
  .createServer((req, res) => {
    const parseurl = url.parse(req.url);

    if (parseurl.pathname === '/favicon.ico') {
      res.writeHead(200);
      res.end();
      return;
     }

     if (parseurl.pathname === '/game') {
       const query = querystring.parse(parseurl.query);
       const playerAction = query.action;

      const gameResult = game(playerAction);

      if (playwon >= 3) {
        res.writeHead(500);
        res.end('我再也不和你玩了');
      }

      res.writeHead(200);
      if (gameResult === 0) {
        res.end('平局');
      } else if (gameResult === 1) {
        res.end('你赢了');
        playwon++;
      } else {
        res.end('你输了');
      }
     }

     if (parseurl.pathname === '/') {
       res.writeHead(200);
       fs.createReadStream(__dirname + '/index.html')
        .pipe(res);
     }
  })
  .listen(8080)