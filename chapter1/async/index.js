
// try {
  
//   interview((data) =>{
//     console.log(data);
//   })
  
// } catch (error) {
//   console.log('cry', error)
// }

// interview((res) => {
//   if (res) {
//     return console.log('cry at 1st round')
//   }

//   interview((res) => {
//     if (res) {
//       return console.log('cry at 2nd round')
//     }

//     interview((res) => {
//       if (res) {
//         return console.log('cry at 3rd round')
//       }

//       console.log('smile');

//     })

//   })
    
// })

function interview(round) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.2) {
      resolve('success');
    } else {
      var error = new Error('fail');
      error.round = round;
      reject(error);
    }
  })
}

var promise = interview(1)
  .then(() => {
    return interview(2);
  })
  .then(() => {
    return interview(3)
  })
  .then(() => {
    console.log('smile');
  })
  .catch(error => {
    console.log('cry at ' + error.round + ' round');
  })


// (function() {
//   var promise = interview();
//   promise
//     .then((res) => {
//       console.log(res)
//     })
//     .then((err) => {
//       console.log(err);
//     })
// })()

