const fs = require('fs');
const querystring = require('querystring');
const Koa = require('koa');
const mount = require('koa-mount');

const game = require('./game');

let playwon = 0;
let playerLastAction = '';
let sameCount = 0;

const app = new Koa();

app.use(
  mount('/favicon.ico', function(ctx) {
    ctx.status = 200;
  }),
);

app.use(
  mount('/game', function(ctx) {
    const queryurl = ctx.request.url;
    const query = querystring.parse(queryurl);
    const playerAction = query.action;

    const gameResult = game(playerAction);

    if (playwon >= 3 || sameCount === 9) {
      ctx.status = 500;
      ctx.body = '我再也不和你玩了';
    }

    if (playerAction && playerLastAction === playerAction) {
      sameCount++;
    } else {
      sameCount = 0;
    }
    playerLastAction = playerAction;

    if (sameCount >= 3) {
      ctx.status = 400;
      ctx.body = '你作弊了';
      sameCount = 9;
    }

    ctx.status = 200;
    if (gameResult === 0) {
      ctx.body = '平局';
    } else if (gameResult === 1) {
      ctx.body = '你赢了';
      playwon++;
    } else {
      ctx.body = '你输了';
    }
  }),
)

app.use(
  mount('/',function(ctx) {
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
  }),
)


app.listen(8080)

