const eventloop = {
  queue: [],
  loop() {
    while(this.queue.length) {
      var callback = this.queue.shift();
      callback();
    }

    setTimeout(this.loop.bind(this), 2000);
  },

  add(callback) {
    this.queue.push(callback);
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(function() {
    console.log(1);
  }, 2000)
});

setTimeout(() => {
  eventloop.add(function() {
    console.log(2);
  }, 4000)
});