var promise = new Promise(function(resove, reject) {
  setTimeout(() => {
    // resove(3);
    reject(new Error(3))
  }, 500)
}).then((res) => {
  // console.log(res);
}).catch((err) => {
  console.log(err)
})

console.log(promise);

setTimeout(() =>{
  console.log(promise)
}, 800)