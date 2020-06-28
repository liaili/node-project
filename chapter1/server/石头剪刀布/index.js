const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');

const game = require('./game');

let playwon = 0;
let playerLastAction = '';
let sameCount = 0;

const app = express();

// app.use(function(req, res){
  
// });

app.get('/favicon.ico', function(req, res) {
  res.writeHead(200);
  res.end();
  return;
})

app.get('/game', function(req, res) {
  const parseurl = querystring.parse(req.url);
  const query = querystring.parse(parseurl.query);
  const playerAction = query.action;

  const gameResult = game(playerAction);

  if (playwon >= 3 || sameCount === 9) {
    res.writeHead(500);
    res.end('我再也不和你玩了');
  }

  if (playerAction && playerLastAction === playerAction) {
    sameCount++;
  } else {
    sameCount = 0;
  }
  playerLastAction = playerAction;

  if (sameCount >= 3) {
    res.writeHead(400);
    res.end('你作弊了');
    sameCount = 9;
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
})

app.get('/', function(req, res) {
  console.log('/')
  res.writeHead(200);
  fs.createReadStream(__dirname + '/index.html')
  .pipe(res);
})

app.listen(8080)

