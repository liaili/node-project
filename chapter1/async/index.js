
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

function interview() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.8) {
      resolve('success');
    } else {
      reject(new Error('fail'));
    }
  })
}

(function() {
  var promise = interview();
  promise
    .then((res) => {
      console.log(res)
    })
    .then((err) => {
      console.log(err);
    })
})()

