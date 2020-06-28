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
  // res.writeHead(200);
  // res.end();
  res.status(200);
  return;
})

app.get('/game', function(req, res) {
  const query = req.query;
  const playerAction = query.action;

  const gameResult = game(playerAction);

  if (playwon >= 3 || sameCount === 9) {
    res.writeHead(500);
    res.send('我再也不和你玩了')
  }

  if (playerAction && playerLastAction === playerAction) {
    sameCount++;
  } else {
    sameCount = 0;
  }
  playerLastAction = playerAction;

  if (sameCount >= 3) {
    res.writeHead(400);
    res.send('你作弊了')
    sameCount = 9;
  }

  res.status(200)
  if (gameResult === 0) {
    res.send('平局')
  } else if (gameResult === 1) {
    res.send('你赢了')
    playwon++;
  } else {
    res.send('你输了')
  }
})

app.get('/', function(req, res) {
  res.status(200)
  res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.listen(8080)

