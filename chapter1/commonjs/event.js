const geektime = require('./eventEmitter');

geektime.addListener('newlesson', (res) => {
  if (res.price < 80) {
    console.log('buy!');
  }
})